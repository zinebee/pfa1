package org.pfa;

import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.pfa.modele.personne;
import org.pfa.modele.personneRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Pfa1Application {
@Autowired
private categorieRepo repository;
@Autowired
private personneRepo repository1;
	public static void main(String[] args) {
		SpringApplication.run(Pfa1Application.class, args);
	}
	@Bean
	CommandLineRunner runner() {
		return args->{
			categorie a=new categorie("nourriture");
			categorie b=new categorie("bricolage");
			categorie c=new categorie("etude");
			repository.save(a);
			repository.save(b);
			repository.save(c);
			repository1.save(new personne("Ali","Haasan","ali.hassan@gmail.com","0611223344",a));
			repository1.save(new personne("Ali1","Haasan1","ali.hassan1@gmail.com","0611223345",b));
			repository1.save(new personne("Ali2","Haasan2","ali.hassan2@gmail.com","0611223346",c));
			
		};
	}

}
