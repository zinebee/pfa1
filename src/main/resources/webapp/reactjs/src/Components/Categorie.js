import axios from 'axios';
import React,{Component} from 'react'; 
import {Card, Form,Button, Col} from 'react-bootstrap';
import NavigationBar from './NavigationBar';
export default class Categorie extends React.Component { 
    constructor(props){
        super(props);
        this.state=this.initialState;
        
       this.categorieChange=this.categorieChange.bind(this);
        this.submitCategorie=this.submitCategorie.bind(this);
       }
        
        initialState={
            categoriee:''
        };
        submitCategorie = event =>{
       const categorie={
           categoriee:this.state.categoriee
       };
       axios.post("http://localhost:8080/categories/"+this.state.categoriee,categorie).then(response =>{
                //if(response.data != null){
                  //  }
            });
    }
       categorieChange= event =>{
           this.setState({
              [event.target.name]:event.target.value
           });
       }
      
       
       componentDidUpdate(){
           
        }
       componentDidMount(){
           if(sessionStorage.getItem("idadmin") ==null){
                   window.location="/connexionadmin";
           }
       }
    render() { 
        return(

            <div>
            <NavigationBar/>
            <Card className={"bg-light text-dark"}>
                <Card.Header>
               Ajouter Categorie
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitCategorie} id="CategorieFormId">
                        <Form.Group className="mb-3" controlId="formGridCategoriee" as={Col}>
                            <Form.Label>Ajouter une nouvelle categorie</Form.Label>
                            <Form.Control name="categoriee" type="text" className={"bg-dark text-white"} placeholder="Entrez Une Nouvelle Categorie" onChange={this.categorieChange}/>
                            </Form.Group>
                        <Button size="sm" variant="success" type="submit" className={"bg-info"}>Valider</Button>
                    </Form>
                </Card.Body>
                </Card></div>
                    );
        }} 