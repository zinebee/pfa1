import React from 'react'; 
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import NavigationBar from './NavigationBar';
class Bienvenue extends React.Component { 
    render() { 
        
        return (
            <div>
                
             <Jumbotron>
            <h1>Desole</h1>
            <blockquote className= "blockquote mb-0">
            <p>Le mot de passe ou le mot d'utilisateur est faux</p> 
            <footer className="blockquote-footer"></footer>
            </blockquote>
            </Jumbotron></div>);
     } } 
     
     export default Bienvenue ;