package org.pfa.controller;

import org.pfa.modele.categorie;
import org.pfa.modele.client;
import org.pfa.modele.clientRepo;
import org.pfa.service.clientservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class clientcontroller {
@Autowired 
private clientRepo clientrepo;
@Autowired
private clientservice clientservicee;
@RequestMapping("/clients")
public Iterable<client> getCategories(){
	return clientrepo.findAll();
}
@RequestMapping(method=RequestMethod.DELETE,value="/clients/{id}")
public void Supprimercategorie(@PathVariable long id) {
	clientservicee.Supprimerclient(id);
}

}
