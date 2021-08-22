package org.pfa.controller;

import java.util.Optional;

import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.pfa.service.categorieservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class categoriecontroller {
	@Autowired
	private categorieservice categorieservicee;
	@Autowired
	private categorieRepo categorierepo;
	@RequestMapping("/Acceuil")
 public String afficher() {
	 return "Bienvenue dans votre site 2 zineb mouna";
 }
	@RequestMapping("/categories")
	public Iterable<categorie> getCategories(){
		return categorierepo.findAll();
	}
	@RequestMapping(method=RequestMethod.POST,value="/categories/{categorie}")
	public void ajoutercategorie(@RequestBody categorie categorie1,@PathVariable String categorie) {
		categorie1.setCategoriee(categorie);
		categorieservicee.Ajoutercategorie(categorie1);
	}
	@RequestMapping(method=RequestMethod.GET,value="/categories/{id}")
	public Optional<categorie> getcategoriebyid(@PathVariable long id){
		return categorierepo.findById(id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/categories/{id}")
	public void Supprimercategorie(@PathVariable long id) {
		categorieservicee.Supprimercategorie(id);
	}
	
	
}

