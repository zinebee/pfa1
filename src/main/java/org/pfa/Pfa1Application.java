package org.pfa;

import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.pfa.modele.client;
import org.pfa.modele.clientRepo;
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
@Autowired
private clientRepo repository2;
	public static void main(String[] args) {
		SpringApplication.run(Pfa1Application.class, args);
	}
	@Bean
	CommandLineRunner runner() {
		return args->{
			categorie a=new categorie("a");
			categorie b=new categorie("b");
			categorie c=new categorie("c");
			repository.save(a);
			repository.save(b);
			repository.save(c);
			repository1.save(new personne("Ali","Haasan","ali.hassan@gmail.com","0611223344","a","ali"));
			repository1.save(new personne("Ali1","Haasan1","ali.hassan1@gmail.com","0611223345","c","ali"));
			repository1.save(new personne("Ali2","Haasan2","ali.hassan2@gmail.com","0611223346","b","ali"));
			repository2.save(new client("zineb","mouna","0611111111","zineb_mouna@gmail.com"," "));
			repository2.save(new client("zineb1","mouna1","0611111112","zineb_mouna1@gmail.com"," 1"));
			repository2.save(new client("zineb2","mouna2","0611111113","zineb_mouna2@gmail.com"," 2"));
			
		};
	}

}
