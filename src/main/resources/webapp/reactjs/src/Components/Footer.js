import React from 'react'; 
import {Navbar, Container, Col} from 'react-bootstrap'; 
class Footer extends React.Component { 
    render() { 
        let fullYear=new Date().getFullYear();
        return ( 
        <Navbar  bg="light" variant="dark"><Container><Col lg={12} className="text-center text-dark">
            <nav>
  <div><p align="center" id="dfdf">Bienvenue dans le service.com.Enjoy!</p></div>  
        
        <h1 align="center">Service.com</h1>
      <ul>
        <li class="deroulant"><a href="#">Categorie &ensp;</a>
          <ul class="sous">
            <li><a href="/ajoutercategorie">Cours HTML et CSS</a></li>
            <li><a href="/listemembres">Cours JavaScript</a></li>
            <li><a href="/authadmin">connexion admin</a></li>
          </ul>
        </li>
        <li class="deroulant"><a href="#">Articles &ensp;</a>
          <ul class="sous">
            <li><a href="#">CSS display</a></li>
            <li><a href="#">CSS position</a></li>
            <li><a href="#">CSS float</a></li>
          </ul>
        </li>
        <li ><a href="#">Compte client &ensp;</a></li>
        <li ><a href="#">Compte Membre &ensp;</a></li>
      </ul>
    </nav>
    <div class="conteneur">
      <p>Du contenu sous le menu</p>
      <img src="r.jpeg"/>
    </div>
             </Col> 
        </Container>
        </Navbar>
        ); 
    } 
}
export default Footer;