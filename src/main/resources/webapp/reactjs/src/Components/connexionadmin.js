import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
export default class connexionadmin extends React.Component { 
    constructor(props){
        super(props);
        this.state=this.initialState;
        
       this.connexionAdminChange=this.connexionAdminChange.bind(this);
        this.submitConnexionadmin=this.submitConnexionadmin.bind(this);
       }
        
        initialState={
            username:'',
            password:''
            
        };
        faireRedirection= () => {
            window.location="listedesmembres";
          }
        submitConnexionadmin = event =>{
   var res=0;
      // axios.get("http://localhost:8080/clients/"+this.state.password+"/"+this.state.email,connexionadminn).then(response => {
           //alert(response.data.toString());
         //  alert(this.state.username);
          // alert(this.state.password);
if(this.state.username === "admin123" && this.state.password === "admin123nimda"){
           res=1;
        }
        
        if(res === 1){
            alert("connexion reussi");
            sessionStorage.setItem("idadmin","admin123");
            event.preventDefault();
            window.location="categories";
            
        }else{
            alert("connexion echoue");
            event.preventDefault();
            window.location="/echecconnexion";
            
            
        }

          
    }
       connexionAdminChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
       }
      
       
       componentDidUpdate(){
           
        }
       
    render() { 
       // document.getElementById("etal").innerHTML="";
        return(
            <Card className={"bg-light text-dark"}>
                <Card.Header>
               Se connecter
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitConnexionadmin} id="ConnexionadminFormId">
                        <Form.Group className="mb-3" controlId="formGridAdmin" as={Col}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" className={"bg-dark text-white"} placeholder="Saisissez votre email" onChange={this.connexionAdminChange}/>
                            <Form.Label>Mot De Passe</Form.Label>
                            <Form.Control name="password" type="password" className={"bg-dark text-white"} placeholder="saisissez votre mot de passe" onChange={this.connexionAdminChange}/>
                            </Form.Group>
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>se connecter</Button>
                    </Form>
                </Card.Body>
                </Card>);
        }} 
    
