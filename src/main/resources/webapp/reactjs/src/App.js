import logo from './logo.svg';
import React from 'react';
import { Alert } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar'
import './App.css';
import {Container,Row,Col,Jumbotron} from 'react-bootstrap';
import { render } from '@testing-library/react';
import Bienvenue from './Components/Bienvenue';
import Footer from './Components/Footer';
import Categorie from './Components/Categorie';
import CategorieListe from './Components/CategorieListe';
import PersonneListe from './Components/PersonneListe';
import ClientListe from './Components/ClientListe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import { tsConstructorType } from '@babel/types';
export default class App extends React.Component{
  //constructor(props){
   //  super(props);
    // this.state={categoriee:''};
    //this.submitCategorie=this.submitCategorie.bind(this);
    // this.submitCategorie=this.submitCategorie.bind(this);
   // }
    /* submitCategorie =event =>{
       //this.setState({categoriee:event.target.value});
      alert(this.state.categoriee);
      alert(event.target.value);
      event.preventDefault();
      
    }*/
      render(){
      //  <CategorieListe/>render(){
       const marginTop = { marginTop:"20px"};
       return (
         
      // <div className="App"><Jumbotron className="bg-dark text-white"> </Jumbotron>
      <Router>
        
       <NavigationBar/><Container>
         <Row>
         <Col lg={12} style = {marginTop} ><Switch> 
           
           <Route path="/" exact component={Bienvenue}/> <Route path="/ajoutercategorie" exact component={Categorie}/><Route path="/categories" exact component={CategorieListe}/> 
           <Route path="/listedesmembres" exact component={PersonneListe}/>
           <Route path="/listedesclients" exact component={ClientListe}/>
           </Switch>
           </Col></Row></Container>
            
         
         
         </Router>
         
      // </div>
   );
    // <Footer/>};
     
 }
  }


