package org.pfa.modele;

<<<<<<< HEAD

=======
>>>>>>> 4f29214bbd95f6a469e24fb130eeec284256653b
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.*;
public interface serviceRepo extends CrudRepository<service,Long>{
	public List<service> findByPersonneeId(Long id);
	@Query("select s from service s where s.categorie=?1")
	List<service> findByCategorie(int categorie);
	//public List<service> findByPersonneId(Long id);
	
<<<<<<< HEAD
}
=======
}
>>>>>>> 4f29214bbd95f6a469e24fb130eeec284256653b
