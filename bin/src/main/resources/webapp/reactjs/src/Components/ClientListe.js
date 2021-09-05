import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
export default class ClientListe extends Component { 
    constructor(props){
        super(props);
        this.state={
            clients: []
        }
       
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/clients").then(response => response.data).then((data)=>{this.setState({clients:data})});
    }
    deleteClient=(clientId) =>{
         axios.delete("http://localhost:8080/clients/"+clientId).then(response =>{
             if(response.data != null){
                // alert("Categorie supprimee avec succes");
                this.setState({ clients:this.state.clients.filter(client => client.id_client!==clientId)});
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
                    <MyToast children={{show:this.state.show,message:"Client supprimee avec succes."}}/>
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
                                this.state.clients.length===0 ?
                             <tr align="center">
                                 <td colSpan="4">{this.state.clients.length}disponible</td>
                             </tr>:
                             this.state.clients.map((client) => (
                                 <tr key={client.id_client}>
                                     <td>{client.email}</td>
                                     <td>{client.nom}</td>
                                     <td>{client.prenom}</td>
                                     <td>{client.telephone}</td>
                                     <td>
                                         <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.deleteClient.bind(this,client.id_client)}>Supprimer</Button>
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
    
