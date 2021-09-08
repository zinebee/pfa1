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
class Bienvenue extends React.Component { 
    
    render() { 
        var ff=window.location.href;
        var ff1=new URL(ff);
        var name =ff1.searchParams.get("nn");
        if(ff != null){
          //  document.getElementById("zaho").innerHTML="v";
          //alert(name);
        }
        return (
            /*<div>
                
             <Jumbotron>
            <h1>Bienvenue Dans Le Site</h1>
            <blockquote className= "blockquote mb-0">
            <p>"serbiskom"</p> 
            <footer className="blockquote-footer">confiance</footer>
            </blockquote>
            <iframe src="./Decorsite/index.html"></iframe>
            </Jumbotron></div>)*/
          /*  <div>
           
            
        
          
                <div class="top-bar d-none d-md-block" ed="essai">
      
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <div class="top-bar-left">
                        <div class="text">
                            <i class="far fa-clock"></i>
                            <h2>8:00 ss- 9:00</h2>
                            <p>Mon - Fri</p>
                        </div>
                        <div class="text">
                            <i class="fa fa-phone-alt"></i>
                            <h2>+0655334455</h2>
                            <p>For Appointment</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="top-bar-right">
                        <div class="social">
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-linkedin-in"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a href="index.html" class="navbar-brand">SER<span>VICE</span>com</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav ml-auto" id="essai">
                <a href="/listedesmembres" class="nav-item nav-link active">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <a href="service.html" class="nav-item nav-link">Categorie</a>
                <a href="price.html" class="nav-item nav-link">Categorie</a>
                <a href="class.html" class="nav-item nav-link">Class</a>
                <a href="team.html" class="nav-item nav-link">Trainer</a>
                <a href="portfolio.html" class="nav-item nav-link">Pose</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                    <div class="dropdown-menu">
                        <a href="blog.html" class="dropdown-item">Blog Grid</a>
                        <a href="single.html" class="dropdown-item">Blog Detail</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
        </div>
      </div>
      </div>
      <div class="hero">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-12 col-md-6">
                    <div class="hero-text">
                        <h1>Yoga Practice For Good Health</h1>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                        </p>
                        <div class="hero-btn">
                            <a class="btn" href="">Join Now</a>
                            <a class="btn" href="">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 d-none d-md-block"> 
                       <div class="hero-image">
                          <img src="logo192.png"/>
                       </div>
                </div>
                </div>
            </div>
        </div>
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <div class="about-img">
                        <img src="../src/Components/Decorsite/img/about.png" alt="Image"/>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6">
                    <div class="section-header text-left">
                        <p>Learn About Us</p>
                        <h2>Welcome to Yooga</h2>
                    </div>
                    <div class="about-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                        </p>
                        <a class="btn" href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <div class="service">
        <div class="container">
            <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>What we do</p>
                <h2>Yoga For Health</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="flaticon-workout"></i>
                        </div>
                        <h3>Heal emotions</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="service-item active">
                        <div class="service-icon">
                            <i class="flaticon-workout-1"></i>
                        </div>
                        <h3>Body Refreshes</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="flaticon-workout-2"></i>
                        </div>
                        <h3>Mind & Serenity</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="flaticon-workout-3"></i>
                        </div>
                        <h3>Enjoy Your life</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="flaticon-workout-4"></i>
                        </div>
                        <h3>Body & Spirituality</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="flaticon-yoga-pose"></i>
                        </div>
                        <h3>Body & Mind</h3>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="footer wow fadeIn" data-wow-delay="0.3s">
        <div class="container-fluid">
            <div class="container">
                <div class="footer-info">
                    <a href="index.html" class="footer-logo">Y<span>oo</span>ga</a>
                    <h3>123 Street, New York, USA</h3>
                    <div class="footer-menu">
                        <p>+012 345 67890</p>
                        <p>info@example.com</p>
                    </div>
                    <div class="footer-social">
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-youtube"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
      
       </div></div> */
      
          
           
       <div id="etal">
          
  <nav id="mynavtest">
  <div><p align="center" id="dfdf">Bienvenue dans le service.com.Enjoy!</p><p id="zaho">{name}</p></div>  
        
        <h1 align="center">Service.com</h1>
      <ul>
        <li class="deroulant"><a href="#">Categorie &ensp;</a>
          <ul class="sous">
            <li><a href="/ajoutercategorie">Cours HTML et CSS</a></li>
            <li><a href="/listemembres">Cours JavaScript</a></li>
            <li><a href="/authadmin">Connexion admin</a></li>
          </ul>
        </li>
        <li><a href="/authadmin">Espace Admin &ensp;</a>
          
        </li>
        <li class="deroulant"><a href="#">Espace client &ensp;</a>
        <ul class="sous">
            <li><a href="/connexionclient">Se connecter</a></li>
            <li><a href="/ajouterclient">S'inscrire</a></li>
            <li><a href="/modifierprofilclient">Profil</a></li>
          </ul>
        </li>
        <li class="deroulant"><a href="#">Espace Membre &ensp;</a>
        <ul class="sous">
            <li><a href="/connexionpersonne">Se connecter</a></li>
            <li><a href="/ajouterpersonne">S'inscrire</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    
    <div class="conteneur">
      <div id="serbiskomlogocont">
	      <div id="serbiskomlogo">
		      <img src="images/decor/logo.png"/>
	      </div>
	      <div id="serbiskomlogodescription">
	      <h1>Serbiskom</h1>
	      <p>Serbiskom est un site web sur lequel les utilisateurs peuvent consulter les annonces de services par catégorie. Un étudiant cherchant des cours de soutien en mathématiques peut chercher les annonces des professeurs qui offrent des cours de soutien dans sa région. Les personnes cherchant des plats fait-maison peuvent consulter les services offert sur la catégorie nourriture. En même temps, les personnes cherchant à travailler en offrant des services peuvent y mettre leurs annonces.</p>
	      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img src="r.jpeg"/>
      <br/><br/>
      <div id="lalahalima">
	      <h1>Plats fait-maison de chez Lalla Halima </h1>
	      <p>Vous adorez les repas traditionnnels marocains, mais vous n'avez pas le temps de les préparer ? </p>
	      <p>Lalla Halima vous offre son service de livraison de vos plats marocains préférés: Rfissa, Couscous, Tajine, Bastila... Jusqu'à chez vous avec des prix incroyable ! </p>
	      <p>Tentez votre chance et essayer les plats de Lalla Halima pour bénéficier de leur qualité et goût 100% marocain.</p>
	  </div>
      
      <br/><br/><br/>
      
       <div id="travailindependantcont">
	      
	      <div id="travailindependantdescription">
	      <h1>Travailleur indépendant</h1>
	      <p>Le travailleur indépendant exerce une activité économique en étant à son propre compte.</p>
	      <p>Il est autonome dans la gestion de son organisation, dans le choix de ses clients et dans la tarification de ses prestations.</p>
	      <p>Par ailleurs, il n'est pas lié par un contrat de travail avec l'entreprise ou la personne pour laquelle il exécute sa mission. Il n'existe pas de lien de subordination entre le donneur d'ouvrage et le travailleur indépendant.</p>
	      </div>
	      
	      
	      
	      <div id="travailindependantlogo">
		      <img src="images/decor/laptop-home-office.jpeg" width="500px"/>
	      </div>
	      

	      
	      
      </div>
      
      <br/><br/>
      
      <div id="mariamknittingcont">
		   <div id="mariamknittinglogo">
			      <img src="images/decor/mariam-logo.jpeg" width="500px"/>
		   </div>
		   <div id="mariamknittingdescription">
		      <h1>Produis tricotés par Mariam </h1>
		      <p>Vous avez besoins de bonnets, sacs, ou n'importe quel produit tricoté? </p>
		      <p>Mariam vous offre son service de tricotage par commande! </p>
		      <p>Vous pouvez même commander des produits personnalisés à vos goûts avec des prix convenables.</p>
	  	   </div>
      	  </div>
      
    </div>
    


</div>



);
     } } 
     
     export default Bienvenue ;