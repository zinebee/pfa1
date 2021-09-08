import axios from 'axios';
import React from 'react'; 
import {Component} from 'react';
import MyToast from './MyToast';
import { Card,Table,ButtonGroup,Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import MenuPersonne from './MenuPersonne';
export default class serviceliste2 extends Component { 
    
    constructor(props){
        super(props);
        this.state={
            services: [],
            nompersonne:[]
        }
        
    }
     
    componentDidMount(){
        if(sessionStorage.getItem("idadmin") ==null){
            window.location="/connexionadmin";
    }
        axios.get("http://localhost:8080/ourservices").then(response => response.data).then((data)=>{this.setState({services:data})});
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
    consulterService=(idpersonne) =>{
        axios.get("http://localhost:8080/personnes/"+idpersonne).then(response =>{
            if(response.data != null){
               // alert("Categorie supprimee avec succes");
              // this.setState({ categories:this.state.categories.filter(categorie => categorie.id!==categorieId)});
               //this.setState({"show":true});
                 // setTimeout(()=> this.setState({"show":false}),3000);
                 const zz=JSON.stringify(response.data);
                
                 window.location="/afficherpersonnes?liste="+idpersonne;
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
                    <MyToast children={{show:this.state.show,message:"service supprimee avec succes."}}/>
                </div>
                     <Table bordered hover striped variant="light">
                         <thead>
                             <tr align="center">
                                 <th>categorie</th>
                                 <th>Description service</th>
                                 <th>nom du service</th>
                                 <th>email</th>
                                 <th>telephone</th>
                                 <th>nom du membre</th>
                                 <th>Supprimer</th>
                                 <th>Consulter</th>
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
                                     <td>{service.nom}</td>
                                     <td>{service.email}</td>
                                     <td>{service.telephone}</td>
                                     <td>{service.personne.nom}</td>
                                     <td>
                                         <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.deleteService.bind(this,service.id)}>Supprimer</Button>
                                         </ButtonGroup>
                                     </td>
                                    <td>
                                    <ButtonGroup>
                                             <Button size="sm" variant="outline-danger" onClick={this.consulterService.bind(this,service.personne.id)}>Consulter</Button>
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