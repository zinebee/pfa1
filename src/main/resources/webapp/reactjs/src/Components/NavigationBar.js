import React from 'react'; 
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Bienvenue from './Bienvenue';
class NavigationBar extends React.Component { 
    render() { 
        return (
        <Navbar bg='dark' variant="dark">
            <Navbar.Brand href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" width="25" height="25"/>
          </Navbar.Brand>
            <Link to={""} className="navbar-brand">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" width="25" height="25"/>
            </Link>
            <Link to={"add"} className="nav-link">Ajouter Categorie</Link>
            <Link to={"categories"} callsName="nav-link">Liste des Categorie</Link>
          
          <Nav className="mr-auto">
              <Nav.Link href="#"></Nav.Link>
              <Nav.Link hraf="#"></Nav.Link>
          </Nav>
        </Navbar>
        );  
    } 
} 
export default NavigationBar;
