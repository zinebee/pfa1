package org.pfa.controller;

import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.pfa.modele.client;
import org.pfa.modele.personne;
import org.pfa.modele.personneRepo;
import org.pfa.service.categorieservice;
import org.pfa.service.personneservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class personnecontroller {
	@Autowired
	private personneservice personneservicee;
	@Autowired
	private personneRepo personnerepo;
	
	@RequestMapping("/personnes")
	public List<personne> getPersonnes(){
		
		return personneservicee.getpersonne();
	    
	}
	@RequestMapping(method=RequestMethod.POST,value="/personnes/ajout")
	public String ajoutercategorie(@RequestBody personne personne1) {
		//categorie1.setCategoriee(personne);
		personneservicee.Ajouterpersonne(personne1);
		return "Ajoute";
	}
	@RequestMapping(method=RequestMethod.GET,value="/personnes/{id}")
	public Optional<personne> getpersonnebyid(@PathVariable long id){
		return personnerepo.findById(id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/personnes/{id}")
	public void Supprimercategorie(@PathVariable long id) {
		personneservicee.Supprimerpersonne(id);
	}
	@RequestMapping(method=RequestMethod.GET,value="/personnes/t/{categorie}")
	public List<personne> trouver(@PathVariable String categorie) {
		List<personne> liste=personnerepo.findByCategorie(categorie);
		if(liste.isEmpty()) {
			return null;
		}else {
			return liste;
		}
		
		
	}
	@RequestMapping(method=RequestMethod.GET,value="/personnes/{password}/{email}")
	public long authentificationpersonne(@PathVariable String password,@PathVariable String email) {
		List<personne> liste=personnerepo.findByPasswordAndEmail(password,email);
		if(liste.isEmpty()) {
			return 0;
		}else {
			return liste.get(0).getId();
		}
		
		
	}
	@RequestMapping(method=RequestMethod.PUT,value="/personnes/m/{id}")
	public void modifierpersonne(@RequestBody personne personnes,@PathVariable long id ) {
		//personne d=new personne();
		//d.setId(id);
		/*d.setCategorie(personnes.getCategorie());
		d.setEmail(personnes.getEmail());
		d.setNom(personnes.getNom());
		d.setPrenom(personnes.getPrenom());
		d.setPassword(personnes.getPassword());
		d.setTelephone(personnes.getTelephone());*/
		personneservicee.Modifierpersonne(personnes,id);
	}
	
}
