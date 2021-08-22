package org.pfa.controller;

import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
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
	public void ajoutercategorie(@RequestBody personne personne1) {
		//categorie1.setCategoriee(personne);
		personneservicee.Ajouterpersonne(personne1);
	}
	@RequestMapping(method=RequestMethod.GET,value="/personnes/{id}")
	public Optional<personne> getpersonnebyid(@PathVariable long id){
		return personnerepo.findById(id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/personnes/{id}")
	public void Supprimercategorie(@PathVariable long id) {
		personneservicee.Supprimerpersonne(id);
	}
	
}
