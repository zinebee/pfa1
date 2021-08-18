package org.pfa.modele;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.*;
@RepositoryRestResource
public interface categorieRepo extends CrudRepository<categorie,Long>{
  //List<categorie> findById(@Param("id")long id);
  //List<categorie> findBycategoriee(@Param("categorie")String categorie);
  
}
