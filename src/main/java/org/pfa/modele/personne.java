package org.pfa.modele;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class personne {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
@NonNull
private String nom;
@NonNull
private String prenom;
@NonNull
private String email;
@NonNull
private String telephone;
@NonNull
private String categorie;


public personne(String nom,String prenom,String email,String telephone,String c) {
	this.nom=nom;
	this.prenom=prenom;
	this.email=email;
	this.telephone=telephone;
	this.categorie=c;
}
public personne(personne p){
	this.nom=p.getNom();
	this.prenom=p.getPrenom();
	this.email=p.getEmail();
	this.telephone=p.getTelephone();
	}
public personne() {
	
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getNom() {
	return nom;
}
public void setNom(String nom) {
	this.nom = nom;
}
public String getPrenom() {
	return prenom;
}
public void setPrenom(String prenom) {
	this.prenom = prenom;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getTelephone() {
	return telephone;
}
public void setTelephone(String telephone) {
	this.telephone = telephone;
}
public String getCategorie() {
	return categorie;
}
public void setCategorie(String categorie) {
	this.categorie = categorie;
}
}
