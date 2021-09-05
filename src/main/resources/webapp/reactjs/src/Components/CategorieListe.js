import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class CategorieListe extends Component { 
    constructor(props){
        super(props);
        this.state={
            categories: []
        }
       
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/categories").then(response => response.data).then((data)=>{this.setState({categories:data})});
    }
    deleteCategorie=(categorieId) =>{
         axios.delete("http://localhost:8080/categories/"+categorieId).then(response =>{
             if(response.data != null){
                // alert("Categorie supprimee avec succes");
                this.setState({ categories:this.state.categories.filter(categorie => categorie.id!==categorieId)});
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
                                this.state.categories.length===0 ?
							this.state.categories.length + 'disponible'
                            :
                             this.state.categories.map((categorie) => (
							
   							<div class="img-container col-md-4">      
   							<div class="cat-item">
                             	<Link to="./ServiceListe.js">
                             	<img src={`../images/categories/`+ categorie.categoriee+ `.jpeg`} alt="Italian Trulli" class="categorie-image" height="250px" width="350px"/>
                             	</Link>
                             	<div class="cat-info">
                             	     <p>{categorie.categoriee}</p>

                             	</div>
                             </div>	
							</div>

                             ))
                             }

             </div>
        );
            }} 
    
