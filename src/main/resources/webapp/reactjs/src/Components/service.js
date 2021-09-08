import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
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
            categorie:0,
            description:'dd',
            mainimage:'',
            nom:'',
            owner:'',
            verified:'',
            email:'',
            telephonepro:'',
            

        };
        submitservice = event =>{
           
	
    // var selectValue = document.getElementById('categorie').options[document.getElementById('identifiantDeMonSelect').selectedIndex].value;
   // var selectElmt = document.getElementById('categorie');
	/**
	selectElmt.options correspond au tableau des balises <option> du select
	selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
	*/
	//alert(selectElmt.options[selectElmt.selectedIndex].value);
    var categorie1=document.getElementById("categoriee").value;
    var description1=document.getElementById("description").value;
       const service={
           nom:null,
           categorie:parseInt(categorie1),
           description:description1,
           telephonepro:this.state.telephonepro,
           owner:null,
           mainimage:null,
           verified:1,
           
};
       //const per="";
       
      // alert(per);
     // var f=this.state.personne;
      alert(+categorie1+3);
      alert(sessionStorage.getItem("idpersonne"));
       alert(JSON.stringify(service));
       //alert(document.getElementsByName("categoriee").value);
      axios.post("http://localhost:8080/personnes/"+sessionStorage.getItem("idpersonne")+"/services",service).then(response =>{
              //  if(response.data == "Ajoute"){
                    //event.preventDefault();
                    window.location="../listedesservices1";

                   // event.preventDefault();
                    //window.location="/lesservices";
                 //   }
            });
    


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
                          
                            <select    id="categoriee" name="categorie" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  
                                <option>Selectionner categorie</option>
                                { 
                                this.state.listes.length===0 ?
                             <p></p>:
                             this.state.listes.map((liste) => (
                                 <option value={liste.id}>{liste.categoriee}</option>
                             ))
                             }

                                </select><br/>
                                <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" className={"bg-light text-dark"} placeholder="Entrez un email" onChange={this.clientChange}/>
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control name="telephonepro" type="text" className={"bg-light text-dark"} placeholder="Entrez un numero de telephone" onChange={this.clientChange}/>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea"  id="description" placeholder="Leave a comment here"style={{ height: '100px' }} name="description"/>
                          
  
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Telecharger une photo</Form.Label>
    <Form.Control type="file" multiple name="myFile"/>
  </Form.Group>
  
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>Valider</Button>
                    </Form>
                </Card.Body>
                </Card>
                </div>);
        }
    } 
