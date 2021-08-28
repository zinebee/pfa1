import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import NavigationBar from './NavigationBar';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
export default class PersonneListe extends Component { 
    constructor(props){
        super(props);
        this.state={
            personnes: []
        }
       
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/personnes").then(response => response.data).then((data)=>{this.setState({personnes:data})});
    }
    deletePersonne=(personneId) =>{
         axios.delete("http://localhost:8080/personnes/"+personneId).then(response =>{
             if(response.data != null){
                // alert("Categorie supprimee avec succes");
                this.setState({ personnes:this.state.personnes.filter(personne => personne.id!==personneId)});
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
                 <NavigationBar/>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast children={{show:this.state.show,message:"Membre supprimee avec succes."}}/>
                </div>
             
                     <Table bordered hover striped variant="light">
                         <thead>
                             <tr align="center">
                                 <th>Email</th>
                                 <th>Nom</th>
                                 <th>Prenom</th>
                                 <th>Telephone</th>
                                 <th>Supprimer</th>
                             </tr>
                         </thead>
                         <tbody>
                             { 
                                this.state.personnes.length===0 ?
                             <tr align="center">
                                 <td colSpan="4">{this.state.personnes.length}disponible</td>
                             </tr>:
                             this.state.personnes.map((personne) => (
                                 <tr key={personne.id}>
                                     <td>{personne.email}</td>
                                     <td>{personne.nom}</td>
                                     <td>{personne.prenom}</td>
                                     <td>{personne.telephone}</td>
                                     <td>
                                         <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.deletePersonne.bind(this,personne.id)}>Supprimer</Button>
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
    
