package org.pfa.service;

import org.pfa.modele.categorie;
import org.pfa.modele.client;
import org.pfa.modele.clientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class clientservice {
	@Autowired
	private clientRepo clientrepo;
	public void Ajouterclient(client c) {
		clientrepo.save(c);
	}
	public void Supprimerclient(long id) {
		clientrepo.deleteById(id);
	}
	public void Modifierclient(client c) {
		clientrepo.save(c);
	}
}
