package org.pfa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;

import org.pfa.service.*;

import java.util.Optional;

import org.pfa.modele.*;
import java.util.*;
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class servicecontroller {
	@Autowired
	private serviceservice serviceservice;
	@Autowired
	private serviceRepo servicerepo;
	@RequestMapping("/Acceuilll")
	 public String afficher() {
		 return "Bienvenue dans votre site 2 zineb mouna";
	 }
		//@RequestMapping(value="/services", method=RequestMethod.GET)
		@RequestMapping("/ourservices")
		public Iterable<service> getServices(){
			return servicerepo.findAll();
		}
		
		/*@RequestMapping(method=RequestMethod.POST,value="/ourservices/{service}")
		public void ajouterservice(@RequestBody service service1,@PathVariable String service) {
			//service1.setNom(service);
			serviceservice.Ajouterservice(service1);
		}*/
		@RequestMapping(method=RequestMethod.POST,value="/personnes/{id}/services")
		public String ajouterservice(@RequestBody service service1,@PathVariable long id) throws JsonProcessingException {
			//categorie1.setCategoriee(personne);
			serviceservice.Ajouterservice(service1,id);
			return "Ajoute";
		}
		
	@RequestMapping(method=RequestMethod.GET,value="/ourservices/{id}")
		public Optional<service> getservicebyid(@PathVariable long id){
			return servicerepo.findById(id);
		}
		@RequestMapping(method=RequestMethod.GET,value="/personnes/{id}/services")
		public List<service> getAllservices(@PathVariable Long id){
			return serviceservice.getAllservices(id);
					}
		
		@RequestMapping(method=RequestMethod.DELETE,value="/ourservices/{id}")
		public void Supprimerservice(@PathVariable long id) {
			serviceservice.Supprimerservice(id);
		}
		
		/*@RequestMapping(method=RequestMethod.GET,value="/ourservices/percategorie/{categorie}")
		public Iterable<service> chercherserviceparcategorie(@RequestBody service service1,@PathVariable int categorie) {
			return serviceservice.ChercherserviceParCat(categorie);
		}*/
		
		/*@RequestMapping("/ourservices/percategorie/{categorie}")
		public Iterable<service> chercherserviceparcategorie(@PathVariable int categorie) {
			return serviceservice.ChercherserviceParCat(categorie);
		}*/
}
