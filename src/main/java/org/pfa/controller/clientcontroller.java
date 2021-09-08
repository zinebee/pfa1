package org.pfa.controller;

import org.pfa.modele.client;
import org.pfa.modele.clientRepo;
import org.pfa.modele.personne;
import org.pfa.service.clientservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class clientcontroller {
@Autowired 
private clientRepo clientrepo;
@Autowired
private clientservice clientservicee;
@RequestMapping("/clients")
public Iterable<client> getClient(){
	return clientrepo.findAll();
}
@RequestMapping(method=RequestMethod.DELETE,value="/clients/{id}")
public String Supprimerclient(@PathVariable long id) {
	clientservicee.Supprimerclient(id);
	return "client supprime";
}
@RequestMapping(method=RequestMethod.POST,value="/clients/ajout")
public String ajouterclient(@RequestBody client client1) {
	//categorie1.setCategoriee(personne);
	clientservicee.Ajouterclient(client1);
	return "client ajoute";
}
@RequestMapping(method=RequestMethod.GET,value="/clients/{password}/{email}")
public long  authentification(@PathVariable String password,@PathVariable String email) {
	List<client> liste=clientrepo.findByPasswordAndEmail(password,email);
	if(liste.isEmpty()) {
		return 0;
	}else {
		return liste.get(0).getId_client();
	}
	
	
}
@RequestMapping(method=RequestMethod.PUT,value="/clients/m/{id}")
public String modifierclient(@RequestBody client client,@PathVariable long id ) {
	
	
	clientservicee.Modifierclient(client,id);
	return "client modifie";
}
@RequestMapping(method=RequestMethod.GET,value="/clients/{id}")
public Optional<client> getclientbyid(@PathVariable long id){
	return clientrepo.findById(id);
}
}
