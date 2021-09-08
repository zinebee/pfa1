package org.pfa.controller;

import java.util.Optional;

import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.pfa.modele.personne;
import org.pfa.modele.personneRepo;
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
	@Autowired
	private personneRepo personnerepo;
	@RequestMapping("/Acceuil")
 public String afficher() {
		long id=492;
		personne q=personnerepo.findById(id).get();
		String dd=q.getCategorie();
		int gg=categorierepo.getlastid();
	 return "Bienvenue dans votre site 2 zineb mouna\n"+gg;
 }
	@RequestMapping("/categories")
	public Iterable<categorie> getCategories(){
		return categorierepo.findAll();
	}
	@RequestMapping(method=RequestMethod.POST,value="/categories/{categorie}")
	public String ajoutercategorie(@RequestBody categorie categorie1,@PathVariable String categorie) {
		categorie1.setCategoriee(categorie);
		categorieservicee.Ajoutercategorie(categorie1);
		return "categorie ajoute";
	}
	@RequestMapping(method=RequestMethod.GET,value="/categories/{id}")
	public Optional<categorie> getcategoriebyid(@PathVariable long id){
		return categorierepo.findById(id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/categories/{id}")
	public String Supprimercategorie(@PathVariable long id) {
		categorieservicee.Supprimercategorie(id);
		return "categorie supprime";
	}
	
	
}

