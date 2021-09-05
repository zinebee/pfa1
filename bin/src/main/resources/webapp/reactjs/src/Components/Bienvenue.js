import React from 'react'; 
import Jumbotron from 'react-bootstrap/Jumbotron'; 
class Bienvenue extends React.Component { 
    render() { 
        
        return (
             <Jumbotron>
            <h1>Bienvenue Dans Le Site</h1>
            <blockquote className= "blockquote mb-0">
            <p>"serbiskom"</p> 
            <footer className="blockquote-footer">confiance</footer>
            </blockquote>
            </Jumbotron>);
     } } 
     
     export default Bienvenue ;