import React from 'react'; 
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Bienvenue from './Bienvenue';
class NavigationBar extends React.Component { 
    render() { 
        return (
         //bg='info' variant="dark" expand="lg"   
        
         
        <div>
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css'></link>
<link rel="stylesheet" href="../../public/css/style.css"/>
<link rel="stylesheet" href="/css/style.css"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<link href="../../public/scss/style.scss"></link>
<link href="../scss/bootstrap"></link>
             <section class="ftco-section">
		<div class="container">
		</div>
       <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	    	<a class="navbar-brand" href="index.html">Serbiskom.</a>
	    	
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="fa fa-bars"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav m-auto">
	        	<li class="nav-item"><a href="/" class="nav-link"><br/>Home</a></li>
	        	
	        	<li class="nav-item"><a href="ajoutercategorie" class="nav-link">Ajouter categorie</a></li>
	        	<li class="nav-item"><a href="categories" class="nav-link">Liste categorie</a></li>
	        	<li class="nav-item"><a href="listedesmembres" class="nav-link">Liste des  Membres</a></li>
	          <li class="nav-item"><a href="listedesclients" class="nav-link">Liste des  Clients</a></li>
			  
			  <li class="nav-item"><a href="listeservicesadmin" class="nav-link">Liste des  Services</a></li>
			
	        </ul>
	      </div>
	    </div>
	  </nav>
   </section>
             <script src="../js/jquery.min.js"></script>
  <script src="../js/popper.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <script src="../js/main.js"></script>
      </div>    
        );  
    } 
} 
export default NavigationBar;
