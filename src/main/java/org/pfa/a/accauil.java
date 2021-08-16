package org.pfa.a;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class accauil {
	@RequestMapping("/Acceuil")
 public String afficher() {
	 return "Bienvenue dans votre site 2";
 }
}

