package org.pfa.service;

import org.pfa.modele.categorieRepo;
import org.pfa.modele.personne;
import org.pfa.modele.personneRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class personneservice {
	@Autowired
	private personneRepo personnerepo;
	public List<personne> getpersonne(){
		List<personne> personnes=new ArrayList<>();
		personnerepo.findAll().forEach(personnes::add);
		
		return personnes;
	}
	public void Ajouterpersonne(personne c) {
		personnerepo.save(c);
	}
	public void Supprimerpersonne(long id) {
		personnerepo.deleteById(id);
	}
	public void Modifierpersonne(personne c) {
		personnerepo.save(c);
	}
}
