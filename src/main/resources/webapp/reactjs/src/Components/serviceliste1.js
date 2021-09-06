import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import MenuPersonne from './MenuPersonne';
export default class serviceliste1 extends Component { 
    constructor(props){
        super(props);
        this.state={
            services: []
        }
       
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/personnes/"+sessionStorage.getItem("idpersonne")+"/services").then(response => response.data).then((data)=>{this.setState({services:data})});
    }
    deleteService=(serviceId) =>{
         axios.delete("http://localhost:8080/ourservices/"+serviceId).then(response =>{
             if(response.data != null){
                // alert("Categorie supprimee avec succes");
                this.setState({ services:this.state.services.filter(service => service.id!==serviceId)});
                this.setState({"show":true});
                   setTimeout(()=> this.setState({"show":false}),3000);
            }else{
                this.setState({"show":false});
            }
         })
    };
    consulterCategorie=(categoriee) =>{
        axios.get("http://localhost:8080/personnes/t/"+categoriee).then(response =>{
            if(response.data != null){
               // alert("Categorie supprimee avec succes");
              // this.setState({ categories:this.state.categories.filter(categorie => categorie.id!==categorieId)});
               //this.setState({"show":true});
                 // setTimeout(()=> this.setState({"show":false}),3000);
                 const zz=JSON.stringify(response.data);
                
                 window.location="/afficher?liste="+categoriee;
           }else{
              // this.setState({"show":false});
              alert("walou");
           }
        })
   };
    render() { 
        //document.getElementById("etal").innerHTML="";
        return(
            <div>
                <MenuPersonne/>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast children={{show:this.state.show,message:"service supprimee avec succes."}}/>
                </div>
                     <Table bordered hover striped variant="light">
                         <thead>
                             <tr align="center">
                                 
                                 <th>service</th>
                                 <th>Description service</th>
                                 <th>Supprimer</th>
                                 
                             </tr>
                         </thead>
                         <tbody>
                             { 
                                this.state.services.length===0 ?
                             <tr align="center">
                                 <td colSpan="3">{this.state.services.length}disponible</td>
                             </tr>:
                             this.state.services.map((service) => (
                                 <tr key={service.id}>
                                     
                                     <td>{service.categorie}</td>
                                     <td>{service.description}</td>
                                     <td>
                                         <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.deleteService.bind(this,service.id)}>Supprimer</Button>
                                         </ButtonGroup>
                                     </td>
                                    
                                 </tr>
                             ))
                             }
                         </tbody>
                     </Table>
             </div>
        );
            }}
