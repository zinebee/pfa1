package org.pfa.service;
import org.pfa.modele.personne;
import org.pfa.modele.personneRepo;
import org.pfa.modele.service;
import org.pfa.modele.serviceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;
@Service
public class serviceservice {
	@Autowired
	private serviceRepo servicerepo;
	@Autowired
	private personneRepo personnerepo;
	public void Ajouterservice(service c,long id) throws JsonProcessingException {
		ObjectMapper o=new ObjectMapper();
		String s = o.writeValueAsString(c);
		 c=o.readValue(s, service.class);
		personne q=personnerepo.findById(id).get();
		c.setPersonne(q);
		servicerepo.save(c);
	}
	public void Supprimerservice(long id) {
		servicerepo.deleteById(id);
	}
	public void Modifierservice(service c) {
		servicerepo.save(c);
	}
	
	public List<service> ChercherserviceParCat(int c) {
		return servicerepo.findByCategorie(c);
	}
	public List<service> getAllservices(Long id) { 
		List<service> services=new ArrayList<>();
		//servicerepo.findByPersonneId(id).forEach(services::add);
		servicerepo.findByPersonneeId(id).forEach(services::add);
		return services; 
	}

	
	
	
	
}
