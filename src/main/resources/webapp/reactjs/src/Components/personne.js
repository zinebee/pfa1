import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
import NavigationBar from './NavigationBar';
export default class personne extends React.Component { 
    constructor(props){
        super(props);
        this.state=this.initialState;
        
       this.personneChange=this.personneChange.bind(this);
        this.submitpersonne=this.submitpersonne.bind(this);
       }
        
        initialState={
            categorie:'',
            email:'',
            nom:'',
            prenom:'',
            telephone:'',
            password:''

        };
        submitpersonne = event =>{
       const personne={
           categorie:this.state.categorie,
           email:this.state.email,
           nom:this.state.nom,
           prenom:this.state.prenom,
           telephone:this.state.telephone,
           password:this.state.password
       };
       axios.post("http://localhost:8080/personnes/ajout",personne).then(response =>{
                if(response.data == "Ajoute"){
                    alert(response.data);
                    event.preventDefault();
                    window.location="/lesservices";
                    }
            });
    }
       personneChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
       }
      
       
       componentDidUpdate(){
           
        }
       
    render() { 
        return(
            <div>
                
            <Card className={"bg-light text-dark"}>
                <Card.Header>
               Insription des membres
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitpersonne} id="personneFormId">
                        <Form.Group className="mb-3" controlId="formGridpersonne" as={Col}>
                            <Form.Label>Categorie</Form.Label>
                            <Form.Control name="categorie" type="text" className={"bg-dark text-white"} placeholder="Entrez Une  Categorie" onChange={this.personneChange}/>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control name="nom" type="text" className={"bg-dark text-white"} placeholder="Entrez un nom" onChange={this.personneChange}/>
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control name="prenom" type="text" className={"bg-dark text-white"} placeholder="Entrez un prenom" onChange={this.personneChange}/>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" className={"bg-dark text-white"} placeholder="Entrez un email" onChange={this.personneChange}/>
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control name="telephone" type="text" className={"bg-dark text-white"} placeholder="Entrez un numero de telephone" onChange={this.personneChange}/>
                            <Form.Label>Mot De Passe</Form.Label>
                            <Form.Control name="password" type="password" className={"bg-dark text-white"} placeholder="Entrez un mot de passe" onChange={this.personneChange}/>
                           
                            </Form.Group>
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>Valider</Button>
                    </Form>
                </Card.Body>
                </Card>
                </div>);
        }} 
    
