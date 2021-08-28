import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
import MenuPersonne from './MenuPersonne';
import menupersonne from './MenuPersonne';
import NavigationBar from './NavigationBar';
export default class service extends React.Component { 
    constructor(props){
        super(props);
        this.state=this.initialState;
        
       this.serviceChange=this.serviceChange.bind(this);
        this.submitservice=this.submitservice.bind(this);
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
        submitservice = event =>{
       const service={
           categorie:this.state.categorie,
           
       };
       /*axios.post("http://localhost:8080/personnes/ajout",personne).then(response =>{
                if(response.data == "Ajoute"){
                    alert(response.data);
                    event.preventDefault();
                    window.location="/lesservices";
                    }
            });*/
    }
       serviceChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
       }
      
       
       componentDidMount(){
        axios.get("http://localhost:8080/categories").then(response => response.data).then((data)=>{this.setState({listes:data})});
   
        }
       
    render() { 
        return(
           
            <div>
              
              <MenuPersonne/>
            <Card className={"bg-light text-dark"}>
                <Card.Header>
               Insription des membres
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitservice} id="serviceFormId">
                        <Form.Group className="mb-3" controlId="formGridservice" as={Col}>
                            <Form.Label>Categorie</Form.Label><br/>
                          
                            <select  name="categorie" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  
                                <option>Selectionner categorie</option>
                                { 
                                this.state.listes.length===0 ?
                             <p></p>:
                             this.state.listes.map((liste) => (
                                 <option key={liste.id}>{liste.categoriee}</option>
                             ))
                             }

                                </select><br/>
                                <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" className={"bg-dark text-white"} placeholder="Entrez un email" onChange={this.clientChange}/>
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control name="telephone" type="text" className={"bg-dark text-white"} placeholder="Entrez un numero de telephone" onChange={this.clientChange}/>
                           
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Telecharger une photo</Form.Label>
    <Form.Control type="file" multiple/>
  </Form.Group>
  
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>Valider</Button>
                    </Form>
                </Card.Body>
                </Card>
                </div>);
        }
    } 
    
