package org.pfa.modele;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor

public class categorie {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
@NonNull
private String categoriee;
public categorie() {
	
}
public categorie(String categor) {
	this.categoriee=categor;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getCategoriee() {
	return categoriee;
}
public void setCategoriee(String categoriee) {
	this.categoriee = categoriee;
}
}
