package org.pfa.modele;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.*;
public interface serviceRepo extends CrudRepository<service,Long>{
	public List<service> findByPersonneeId(Long id);
	@Query("select s from service s where s.categorie=?1")
	List<service> findByCategorie(int categorie);
	//public List<service> findByPersonneId(Long id);
	
}