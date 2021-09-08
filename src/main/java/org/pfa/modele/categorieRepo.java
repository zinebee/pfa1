package org.pfa.modele;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.*;
@RepositoryRestResource
public interface categorieRepo extends CrudRepository<categorie,Long>{

//	Optional<categorie> findByCategorie(String categoriee);
  //List<categorie> findById(@Param("id")long id);
  //List<categorie> findBycategoriee(@Param("categorie")String categorie);
	@Query("select MAX(id) from categorie")
	public int getlastid();
  
}
