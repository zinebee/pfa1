package org.pfa.modele;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor

public class client {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_client;
	@NonNull
	private String nom;
	@NonNull
	private String prenom;
	@NonNull
	private String Telephone;
	@NonNull
	private String email;
	@NonNull
	private String password;
	public client(String nom,String prenom,String Telephone,String email,String password){
		this.nom=nom;
		this.prenom=prenom;
		this.Telephone=Telephone;
		this.email=email;
		this.password=password;
	
	}
	public client() {
		
	}
	public long getId_client() {
		return id_client;
	}
	public void setId_client(long id_client) {
		this.id_client = id_client;
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
	public String getTelephone() {
		return Telephone;
	}
	public void setTelephone(String telephone) {
		Telephone = telephone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
