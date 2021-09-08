package org.pfa.modele;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.*;
@RepositoryRestResource
public interface personneRepo extends CrudRepository<personne,Long>{
	List<personne>findByCategorie(@Param("categorie")String categorie);
	List<personne>findByPasswordAndEmail(@Param("password")String password,@Param("email")String email);
	
	
}
