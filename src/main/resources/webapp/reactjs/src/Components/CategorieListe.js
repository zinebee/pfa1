import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
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
             <Card className={"border border-dark bg-dark text-white"}>
                 <Card.Header>Liste des Categories</Card.Header>
                 <Card.Body>
                     <Table bordered hover striped variant="dark">
                         <thead>
                             <tr align="center">
                                 <th>Id du Categorie</th>
                                 <th>Categorie</th>
                                 <th>Supprimer</th>
                             </tr>
                         </thead>
                         <tbody>
                             { 
                                this.state.categories.length===0 ?
                             <tr align="center">
                                 <td>{this.state.categories.length}disponible</td>
                             </tr>:
                             this.state.categories.map((categorie) => (
                                 <tr key={categorie.id}>
                                     <td>{categorie.id}</td>
                                     <td>{categorie.categoriee}</td>
                                     <td>
                                         <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.deleteCategorie.bind(this,categorie.id)}>Supprimer</Button>
                                         </ButtonGroup>
                                     </td>
                                 </tr>
                             ))
                             }
                         </tbody>
                     </Table>
                 </Card.Body>
             </Card>
             </div>
        );
            }} 
    
