import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
import MenuPersonne from './MenuPersonne';
import menupersonne from './MenuPersonne';
import NavigationBar from './NavigationBar';
export default class modifierclient extends React.Component { 
    //c'est le fichier de modification des informations du client
    constructor(props){
        super(props);
        this.state=this.initialState;
      
       this.clientChange=this.clientChange.bind(this);
        this.submitmodclient=this.submitmodclient.bind(this);
       }
        
        initialState={
            listes:[],
           
            email:'',
            nom:'',
            prenom:'',
            telephone:'',
            password:''

        };
       
        submitmodclient = event =>{
       const client={
           id_client:sessionStorage.getItem("idclient"),
          
telephone:this.state.telephone,
email:this.state.email,
nom:this.state.nom,
password:this.state.password,
prenom:this.state.prenom,




       };
      
      if(this.state.nom == ""){
        client["nom"]=this.state.listes.nom;
    }
    if(this.state.prenom ==""){
        client["prenom"]=this.state.listes.prenom;
    }
    if(this.state.email ==""){
        client["email"]=this.state.listes.email;
    }
    if(this.state.telephone ==""){
        client["telephone"]=this.state.listes.telephone;
    }  
    if(this.state.password ==""){
        client["password"]=this.state.listes.password;
    }  
     
      // alert(JSON.stringify(personne));
      //cette fonction va permettre de realiser la mise a jour des infos dans la base de donnee
       axios.put("http://localhost:8080/clients/m/"+sessionStorage.getItem("idclient"),client).then(response =>{
                            
            }).catch(error => {
                console.error('Something went wrong!', error);
              });

      
    }
       clientChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
          
       }
      
       
       componentDidMount(){
           //verifier si la session du client est ouverte,sinon il faut se connecter tout d'abord
           if(sessionStorage.getItem("idclient") == null){
               window.location="../connexionclient";
           }else{
       axios.get("http://localhost:8080/clients/"+sessionStorage.getItem("idclient")).then(response => response.data).then((data)=>{this.setState({listes:data})});
   
           }
        }
      
    render() { 
      const {categorie,nom,prenom,email,telephone,password}=this.state;
        return(
          
            <div>
              
             
           
                
            <Card className={"bg-light text-dark"}>
              <Card.Header>
               Profil client
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitmodclient} id="clientFormId">
                        <Form.Group className="mb-3" controlId="formGridpersonne" as={Col}>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control name="nom" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un nom" defaultValue={this.state.listes.nom} onChange={this.clientChange} />
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control name="prenom" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un prenom"  defaultValue={this.state.listes.prenom} onChange={this.clientChange} />
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un email"  defaultValue={this.state.listes.email} onChange={this.clientChange} />
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control name="telephone" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un numero de telephone"  defaultValue={this.state.listes.telephone} onChange={this.clientChange} />
                            <Form.Label>Mot De Passe</Form.Label>
                            <Form.Control name="password" type="password" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un mot de passe" defaultValue={this.state.listes.password} onChange={this.clientChange} />
                           
                            </Form.Group>
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>Valider</Button>
                    </Form>
                </Card.Body>
                </Card>
                </div>);
        }
    } 
    
