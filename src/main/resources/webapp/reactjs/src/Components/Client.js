import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
import NavigationBar from './NavigationBar';
export default class Client extends React.Component { 
    constructor(props){
        super(props);
        this.state=this.initialState;
        
       this.clientChange=this.clientChange.bind(this);
        this.submitclient=this.submitclient.bind(this);
       }
        
        initialState={
            telephone:'',
            email:'',
            nom:'',
            prenom:'',
            password:''

        };
        submitclient = event =>{
       const client={
           telephone:this.state.telephone,
           email:this.state.email,
           nom:this.state.nom,
           prenom:this.state.prenom,
           password:this.state.password
       };
       axios.post("http://localhost:8080/clients/ajout",client).then(response =>{
                //if(response.data != null){
                  //  }
            });
    }
       clientChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
       }
      
       
       componentDidUpdate(){
           
        }
       
    render() { 
        //document.getElementById("etal").innerHTML="";
        return(
            
            <div>
               
            <Card className={"bg-light text-dark"}>
                <Card.Header>
               Insription des clients
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitclient} id="clientFormId">
                        <Form.Group className="mb-3" controlId="formGridcleint" as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" className={"bg-dark text-white"} placeholder="Entrez Un mot de passe" onChange={this.clientChange}/>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control name="nom" type="text" className={"bg-dark text-white"} placeholder="Entrez un nom" onChange={this.clientChange}/>
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control name="prenom" type="text" className={"bg-dark text-white"} placeholder="Entrez un prenom" onChange={this.clientChange}/>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" className={"bg-dark text-white"} placeholder="Entrez un email" onChange={this.clientChange}/>
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control name="telephone" type="text" className={"bg-dark text-white"} placeholder="Entrez un numero de telephone" onChange={this.clientChange}/>
                           
                            </Form.Group>
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>Valider</Button>
                    </Form>
                </Card.Body>
                </Card>
                </div>);
        }} 