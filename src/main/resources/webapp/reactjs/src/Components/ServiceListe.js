import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
export default class ServiceListe extends Component { 
    constructor(props){
        super(props);
        this.state={
            services: []
        }
       
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/service").then(response => response.data).then((data)=>{this.setState({service:data})});
    }
    deleteCategorie=(serviceId) =>{
         axios.delete("http://localhost:8080/service/"+serviceId).then(response =>{
             if(response.data != null){
                // alert("Categorie supprimee avec succes");
                this.setState({ categories:this.state.categories.filter(service => service.id!==serviceId)});
                this.setState({"show":true});
                   setTimeout(()=> this.setState({"show":false}),3000);
            }else{
                this.setState({"show":false});
            }
         })
    };
    render() { 
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast children={{show:this.state.show,message:"Categorie supprimee avec succes."}}/>
                </div>

                             { 
                                this.state.service.length===0 ?
							this.state.service.length + 'disponible'
                            :
                             this.state.service.map((service) => (
							
   							<div class="img-container col-md-4">      
   							<div class="cat-item">
                             	<img src={`../images/categories/`+ service.nom+ `.jpeg`} alt="Italian Trulli" class="service-image" height="250px" width="350px"/>
                             	<div class="cat-info">
                             	     <p>{service.nom}</p>

                             	</div>
                             </div>	
							</div>

                             ))
                             }

             </div>
        );
            }} 
    