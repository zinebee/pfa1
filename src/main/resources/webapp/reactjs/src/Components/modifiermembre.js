import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
import MenuPersonne from './MenuPersonne';
import menupersonne from './MenuPersonne';
import NavigationBar from './NavigationBar';
export default class modifiermembre extends React.Component { 
    constructor(props){
        super(props);
        this.state=this.initialState;
       // axios.get("http://localhost:8080/personnes/"+sessionStorage.getItem("idpersonne")).then(response => response.data).then((data)=>{this.setState({listes:data})});
   
       this.personneChange=this.personneChange.bind(this);
        this.submitmodpersonne=this.submitmodpersonne.bind(this);
       }
        
        initialState={
            listes:[],
            categorie:'',
            email:'',
            nom:'',
            prenom:'',
            telephone:'',
            password:''

        };
       
        submitmodpersonne = event =>{
       const personne={
           id:sessionStorage.getItem("idpersonne"),
          /* categorie:this.state.categorie ==null ? this.state.listes.categorie :this.state.categorie ,
           nom:this.state.nom ==null ? this.state.listes.nom :this.state.nom,
           prenom:this.state.prenom ==null ? this.state.listes.prenom :this.state.prenom,
           email: this.state.email ==null ? this.state.listes.email :this.state.email,
           telephone: this.state.telephone ==null ? this.state.listes.telephone :this.state.telephone,
           password:this.state.password ==null ? this.state.listes.password :this.state.password,
          
*/

categorie:this.state.categorie,
nom:this.state.nom,
prenom:this.state.prenom,
email:this.state.email,
telephone:this.state.telephone,
password:this.state.password

       };
      if(this.state.categorie ==""){
          personne["categorie"]=this.state.listes.categorie;
      }
      if(this.state.nom == ""){
        personne["nom"]=this.state.listes.nom;
    }
    if(this.state.prenom ==""){
        personne["prenom"]=this.state.listes.prenom;
    }
    if(this.state.email ==""){
        personne["email"]=this.state.listes.email;
    }
    if(this.state.telephone ==""){
        personne["telephone"]=this.state.listes.telephone;
    }  
    if(this.state.password ==""){
        personne["password"]=this.state.listes.password;
    }  
     
      // alert(JSON.stringify(personne));
       axios.put("http://localhost:8080/personnes/m/"+sessionStorage.getItem("idpersonne"),personne).then(response =>{
                            
            }).catch(error => {
                console.error('Something went wrong!', error);
              });

      
    }
       personneChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
          
       }
      
       
       componentDidMount(){
       axios.get("http://localhost:8080/personnes/"+sessionStorage.getItem("idpersonne")).then(response => response.data).then((data)=>{this.setState({listes:data})});
   
       
        }
      
    render() { 
      const {categorie,nom,prenom,email,telephone,password}=this.state;
        return(
          
            <div>
              
              <MenuPersonne/>
           
                
            <Card className={"bg-light text-dark"}>
              <Card.Header>
               Insription des membres
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitmodpersonne} id="personneFormId">
                        <Form.Group className="mb-3" controlId="formGridpersonne" as={Col}>
                            <Form.Label>Categorie</Form.Label>
                            <Form.Control name="categorie" autoComplete="off" type="text" className={"bg-dark text-white"} placeholder="Entrez Une  Categorie"  defaultValue={this.state.listes.categorie} onChange={this.personneChange} />
                            <Form.Label>Nom</Form.Label>
                            <Form.Control name="nom" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un nom" defaultValue={this.state.listes.nom} onChange={this.personneChange} />
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control name="prenom" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un prenom"  defaultValue={this.state.listes.prenom} onChange={this.personneChange} />
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un email"  defaultValue={this.state.listes.email} onChange={this.personneChange} />
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control name="telephone" type="text" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un numero de telephone"  defaultValue={this.state.listes.telephone} onChange={this.personneChange} />
                            <Form.Label>Mot De Passe</Form.Label>
                            <Form.Control name="password" type="password" autoComplete="off" className={"bg-dark text-white"} placeholder="Entrez un mot de passe" defaultValue={this.state.listes.password} onChange={this.personneChange} />
                           
                            </Form.Group>
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>Valider</Button>
                    </Form>
                </Card.Body>
                </Card>
                </div>);
        }
    } 
    
