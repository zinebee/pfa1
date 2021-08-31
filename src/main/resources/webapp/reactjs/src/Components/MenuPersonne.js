import React from 'react'; 
import {Navbar, Container, Col} from 'react-bootstrap'; 
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import NavigationBar from './NavigationBar';
import './Decorsite/css/style.css';
import './Decorsite/lib/animate/animate.min.css';
import './Decorsite/lib/flaticon/font/flaticon.css';
import './Decorsite/lib/owlcarousel/assets/owl.carousel.min.css';
import './Decorsite/lib/lightbox/css/lightbox.min.css';
import './Decorsite/css/style2.css';
import './Decorsite/css/style1.css';
import $ from "jquery";
import { define } from 'mime';
import { fn } from 'jquery';
import jQuery from 'jquery';
import { useEffect } from 'react';
import './Decorsite/js/jquery-3.4.1.min.js';
class MenuPersonne extends React.Component { 
    render(){
        return(
            <div id="etall">
          
            <nav>
            
                  <a href="/lesservices"><h1 align="center">Service.com</h1></a>
                <ul>
                  <li><a href="/ajouterservices">Ajouter un service &ensp;</a>
                    
                  </li>
                  <li><a href="/modifierprofilmembre">Modifier le profile &ensp;</a>
                    
                  </li>
                  
                </ul>
              </nav>
              
              
              
          
          
          </div>
        );
    }
} 
     
export default MenuPersonne;