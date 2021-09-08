package org.pfa;

import org.junit.Test;
import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.junit.Before;
import org.junit.Assert;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.*;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;


public class categoriecontrollertest extends AbstractTest{
	@Autowired
	private categorieRepo repository;
	@Override
	 @Before
	    public void setUp() {
		    super.setUp();
	    }
	@Test
	@DisplayName("GET method")
	public void r1() throws Exception {
		String uri = "/categories";
	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
          assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      categorie[] productlist = super.mapFromJson(content, categorie[].class);
	      Assertions.assertTrue(productlist.length > 0);
	      System.out.println("dd"+productlist.toString());
	}
	@Test
	@DisplayName("Post method")
	public void c1() throws Exception {
	   String uri = "/categories/";
	   categorie cat = new categorie("decoration");
	   uri+=cat.getCategoriee();
	   String inputJson = super.mapToJson(cat);
	   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
	      .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
	   
	   int status = mvcResult.getResponse().getStatus();
	   String content = mvcResult.getResponse().getContentAsString();
	   assertTrue(true);
	}
	@Test
	@DisplayName("Delete method")
	public void d1() throws Exception {
		String uri = "/categories/"+repository.getlastid();
		
		   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
		   int status = mvcResult.getResponse().getStatus();
		   assertEquals(200, status);
		   System.out.println("suppression"+status);
		   String content = mvcResult.getResponse().getContentAsString();
		   assertEquals(content, "categorie supprime");
	}
	
}
