package org.pfa;
import org.junit.Test;
import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.pfa.modele.client;
import org.pfa.modele.clientRepo;
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
public class clientcontrollertest extends AbstractTest{
	@Autowired
	private clientRepo repository2;
	@Override
	 @Before
	    public void setUp() {
		    super.setUp();
	    }
	@Test
	@DisplayName("GET method1")
	public void r1() throws Exception {
		String uri = "/clients";
	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
         assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      client[] clientlist = super.mapFromJson(content, client[].class);
	      Assertions.assertTrue(clientlist.length > 0);
	      System.out.println("dd"+clientlist.toString());
	}
	@Test
	@DisplayName("GET method2")
	public void r2() throws Exception {
		String uri = "/clients/1461";
	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
         assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	     // client[] clientlist = super.mapFromJson(content, client[].class);
	      Assertions.assertTrue(content  !=null);
	      System.out.println("le client trouve : "+content);
	}
	@Test
	@DisplayName("GET method3")
	public void r3() throws Exception {
		String uri = "/clients/test/test@gmail.com";
	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
         assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      Assertions.assertTrue(content != "0");
	      System.out.println("vrai"+content);
	}
	@Test
	@DisplayName("Post method")
	public void c1() throws Exception {
	   String uri = "/clients/ajout";
	   client cat = new client("test","test","0111111111","test@gmail.com","test");
	   
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
		String uri = "/clients/"+repository2.getlastid();
		
		   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
		   int status = mvcResult.getResponse().getStatus();
		   assertEquals(200, status);
		   System.out.println("suppression"+status);
		   String content = mvcResult.getResponse().getContentAsString();
		   assertEquals(content, "client supprime");
	}
	@Test
	@DisplayName("Put method")
	public void updateClient() throws Exception {
	   String uri = "/clients/m/1461";
	   client unClient = new client();
	   
	   unClient.setNom("test1");
	   String inputJson = super.mapToJson(unClient);
	   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
	      .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
	   
	   int status = mvcResult.getResponse().getStatus();
	   assertEquals(200, status);
	   String content = mvcResult.getResponse().getContentAsString();
	   assertEquals(content, "client modifie");
	}
}
