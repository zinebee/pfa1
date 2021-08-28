import logo from './logo.svg';
import React, { useEffect } from 'react';
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
import personne from './Components/personne';
import  Client from './Components/Client';
import Connexionclient from './Components/Connexionclient';
import connexionpersonne from './Components/connexionpersonne';
import connexionadmin from './Components/connexionadmin';
import Echecconnexion from './Components/Echecconnexion';
import affichermenuu from './Components/affichermenuu';
import afficherparcategorie from './Components/afficherparcategorie';
import './index.css';
import MenuPersonne from './Components/MenuPersonne';
import service from './Components/service';
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
   componentDidMount(){
     return <h1>ss</h1>;
   }
    
      render(){
      //  <CategorieListe/>render(){
    
       const marginTop = { marginTop:"20px"};
       return (
         
      // <div className="App"><Jumbotron className="bg-dark text-white"> </Jumbotron>
      <Router>
            
       <Container>
         <Row>
         <Col lg={12} style = {marginTop} ><Switch> 
          
           <Route path="/authadmin" exact component={connexionadmin}/>
           <Route path="/" exact component={Bienvenue}/>
           <Route path="/ajoutercategorie" exact component={Categorie}/><Route path="/categories" exact component={CategorieListe}/> 
           <Route path="/listedesmembres" exact component={PersonneListe}/>
           <Route path="/listedesclients" exact component={ClientListe}/>
           <Route path="/ajouterpersonne" exact component={personne}/>
           <Route path="/ajouterclient" exact component={Client}/>
           <Route path="/connexionclient" exact component={Connexionclient}/>
           <Route path="/connexionpersonne" exact component={connexionpersonne}/>
           <Route path="/connexionadmin" exact component={connexionadmin}/>
           <Route path="/echecconnexion" exact component={Echecconnexion}/>
           <Route path="/afficher" exact component={afficherparcategorie}/>
           <Route path="/lesservices" exact component={MenuPersonne}/>
           <Route path="/ajouterservices" exact component={service}/>
           </Switch>
           </Col></Row></Container>
            
         
         
         </Router>
         
      // </div>
   );
    // <Footer/>};
     
 }
  }