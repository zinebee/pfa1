package org.pfa.modele;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.*;
@RepositoryRestResource
public interface clientRepo  extends CrudRepository<client,Long>{
	@Query("select MAX(id_client) from client")
	public int getlastid();
  
	List<client>findByPasswordAndEmail(@Param("password")String password,@Param("email")String email);
	
}
