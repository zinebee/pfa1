package org.pfa.service;

import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class categorieservice {
@Autowired
private categorieRepo categorierepo;
public void Ajoutercategorie(categorie c) {
	categorierepo.save(c);
}
public void Supprimercategorie(long id) {
	categorierepo.deleteById(id);
}
public void ModifierCategorie(categorie c) {
	categorierepo.save(c);
}
}
