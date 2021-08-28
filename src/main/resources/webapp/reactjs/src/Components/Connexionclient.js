import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
export default class Connexionclient extends React.Component { 
    constructor(props){
        super(props);
        this.state=this.initialState;
        
       this.connexionclientChange=this.connexionclientChange.bind(this);
        this.submitConnexionclient=this.submitConnexionclient.bind(this);
       }
        
        initialState={
            email:'',
            password:'',
            clients:''
            
        };
        submitConnexionclient = event =>{
       const connexionclient={
           email:this.state.email,
           password:this.state.password,
           
       };
   var res=" ";
       axios.get("http://localhost:8080/clients/"+this.state.password+"/"+this.state.email,connexionclient).then(response => {
           alert(response.data);
           if(response.data == "trouve"){
               alert(" connexion reussi");
              // alert("connexion reussi");
           //    event.preventDefault();
              window.location="/?nn=Bonjour"+this.state.email;
           }else{
               alert("connexion echoue");
           //    event.preventDefault();
               window.location="/";
               
           }
           //this.setState({clients:response.data});
        }).then((data)=>{this.setState({clients:data})});
       //.then(response =>{
               // if(response.data != null){
                  // alert(response);
                   // alert(response.data);
                    // alert("Categorie supprimee avec succes");
                //this.setState({ clients:this.state.clients.filter(client => client.id!==clientId)});
              //  this.setState({"show":true});
               //    setTimeout(()=> this.setState({"show":false}),3000);
               //alert("voila");
         //   }else{
               // this.setState({"show":false});$
              // alert("connexion echoue");
         //   }
            //alert("Le resultat: "+this.state.clients);      
           // });
           //if(r.catch(err=>alert(err)).length != 0){
           // alert("sdsd"+r.catch(err=>alert(err)));
        //   }else{
             // alert("connexion reussi");
       //    }
           // alert(z.then((value)=>{alert(value)}));
          // alert(z.then((data)=>{this.setState({clients:data})}));
    }
       connexionclientChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
       }
      
       
       componentDidUpdate(){
           
        }
       
    render() { 
        return(
            <Card className={"bg-light text-dark"}>
                <Card.Header>
               Se connecter
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitConnexionclient} id="ConnexionclientFormId">
                        <Form.Group className="mb-3" controlId="formGridCategoriee" as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" className={"bg-dark text-white"} placeholder="Saisissez votre email" onChange={this.connexionclientChange}/>
                            <Form.Label>Mot De Passe</Form.Label>
                            <Form.Control name="password" type="password" className={"bg-dark text-white"} placeholder="saisissez votre mot de passe" onChange={this.connexionclientChange}/>
                            </Form.Group>
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>se connecter</Button>
                    </Form>
                </Card.Body>
                </Card>);
        }} 
