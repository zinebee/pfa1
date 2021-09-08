package org.pfa.modele;

<<<<<<< HEAD

=======
>>>>>>> 4f29214bbd95f6a469e24fb130eeec284256653b
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class service {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@NonNull
	private String nom;
	@NonNull
	private String email;
	@NonNull
	private String telephonepro;
	@NonNull
	private int categorie;
	@NonNull
	private String description;
	@NonNull
	private String owner;
	@NonNull
	private String mainimage;
	@NonNull
	private int verified;
	@JsonIgnore
	@ManyToOne 
	@JoinColumn(name="idpersonne")
    private personne personnee;
	
	public service(String nom,  int categorie, String description,
			 String owner, String mainimage, int verified) {
		//super();
		this.nom = nom;
		this.categorie = categorie;
		this.description = description;
		this.owner = owner;
		this.mainimage=mainimage;
		this.verified=verified;
	}
	public service(String nom,  int categorie, String description,
			 String owner, String mainimage, int verified,personne personne1) {
		//super();
		this.nom = nom;
		this.categorie = categorie;
		this.description = description;
		this.owner = owner;
		this.mainimage=mainimage;
		this.verified=verified;
	   this.setPersonne(personne1);
	}
	public service(String nom,  int categorie, String description,
			 String owner, String mainimage) {
		//super();
		this.nom = nom;
		this.categorie = categorie;
		this.description = description;
		this.owner = owner;
		this.mainimage=mainimage;
	}
	
	public service() {
		
	}
	
	public long getId() {
		return id;
	}
	/*public void setId(long id) {
		this.id = id;
	}*/
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public int getCategorie() {
		return categorie;
	}
	public void setCategorie(int categorie) {
		this.categorie = categorie;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getMainimage() {
		return mainimage;
	}

	public void setMainimage(String mainimage) {
		this.mainimage = mainimage;
	}

	public int getVerified() {
		return verified;
	}

	public void setVerified(int verified) {
		this.verified = verified;
	}
	public personne getPersonne() {
		return personnee;
	}
	public void setPersonne(personne personne) {
		this.personnee = personne;
	}
	public void setId(long id) {
		this.id = id;
	}

	
<<<<<<< HEAD
}
=======
}
>>>>>>> 4f29214bbd95f6a469e24fb130eeec284256653b
