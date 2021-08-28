import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
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
                <NavigationBar/>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast children={{show:this.state.show,message:"Categorie supprimee avec succes."}}/>
                </div>
                     <Table bordered hover striped variant="light">
                         <thead>
                             <tr align="center">
                                 
                                 <th>Categorie</th>
                                 <th>Supprimer</th>
                                 <th>Consulter</th>
                             </tr>
                         </thead>
                         <tbody>
                             { 
                                this.state.categories.length===0 ?
                             <tr align="center">
                                 <td colSpan="3">{this.state.categories.length}disponible</td>
                             </tr>:
                             this.state.categories.map((categorie) => (
                                 <tr key={categorie.id}>
                                     
                                     <td>{categorie.categoriee}</td>
                                     <td>
                                         <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.deleteCategorie.bind(this,categorie.id)}>Supprimer</Button>
                                         </ButtonGroup>
                                     </td>
                                     <td>
                                         <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.consulterCategorie.bind(this,categorie.categoriee)}>Consulter</Button>
                                         </ButtonGroup></td>
                                 </tr>
                             ))
                             }
                         </tbody>
                     </Table>
             </div>
        );
            }}