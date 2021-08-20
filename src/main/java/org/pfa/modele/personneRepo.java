package org.pfa.modele;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.*;
public interface personneRepo extends CrudRepository<personne,Long>{
	
}
