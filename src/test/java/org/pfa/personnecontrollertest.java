package org.pfa;
import org.junit.Test;
import org.pfa.modele.categorie;
import org.pfa.modele.categorieRepo;
import org.pfa.modele.client;
import org.pfa.modele.personne;
import org.pfa.modele.clientRepo;
import org.pfa.modele.personneRepo;
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
public class personnecontrollertest extends AbstractTest{
     @Autowired
     private personneRepo repository3;
     @Override
	 @Before
	    public void setUp() {
		    super.setUp();
	    }
    @Test
 	@DisplayName("Post method")
 	public void c1() throws Exception {
 	   String uri = "/personnes/ajout";
 	   personne per = new personne("test","test","test@gmail.com","0611223344","test","test");
 	   
 	   String inputJson = super.mapToJson(per);
 	   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
 	      .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
 	   
 	   int status = mvcResult.getResponse().getStatus();
 	   String content = mvcResult.getResponse().getContentAsString();
 	   assertTrue(true);
 	}
    @Test
 	@DisplayName("GET method1")
 	public void r1() throws Exception {
    	//arrange
 		String uri = "/personnes";
 		//act
 	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
 	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
 	      
 	      int status = mvcResult.getResponse().getStatus();
          String content = mvcResult.getResponse().getContentAsString();
 	      personne[] personnelist = super.mapFromJson(content, personne[].class);
 	      //assert
 	      assertEquals(200, status);
 	      Assertions.assertTrue(personnelist.length > 0);
 	      System.out.println("dd"+personnelist.toString());
 	}
    @Test
 	@DisplayName("GET method2")
 	public void r2() throws Exception {
    	//arrange
 		String uri = "/personnes/1461";
 		//act
 	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
 	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
 	      
 	      int status = mvcResult.getResponse().getStatus();
         
 	      String content = mvcResult.getResponse().getContentAsString();
 	    
 	      //assert
 	      assertEquals(200, status);
 	      Assertions.assertTrue(content  !=null);
 	      System.out.println("le client trouve : "+content);
 	}
    @Test
 	@DisplayName("GET method4")
 	public void r4() throws Exception {
    	//arrange
 		String uri = "/personnes/t/a";
 		//Act
 	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
 	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
 	      
 	      int status = mvcResult.getResponse().getStatus();
       
 	      String content = mvcResult.getResponse().getContentAsString();
 	   //Assert
 	      assertTrue(true);
 	      System.out.println("les personne trouve : "+content+"status: "+status);
 	}
     @Test
 	@DisplayName("GET method3")
 	public void r3() throws Exception {
    	 //arrange
 		String uri = "/personnes/test/test@gmail.com";
 		//act
 	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
 	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
 	      
 	      int status = mvcResult.getResponse().getStatus();
          assertEquals(200, status);
 	      String content = mvcResult.getResponse().getContentAsString();
 	      Assertions.assertTrue(content != "0");
 	      System.out.println("vrai"+content);
 	}
     @Test
 	@DisplayName("Put method")
 	public void updatePersonne() throws Exception {
    	 //arrange
 	   String uri = "/personnes/m/1497";
 	   client unClient = new client();
 	   
 	   unClient.setNom("test11");
 	   String inputJson = super.mapToJson(unClient);
 	   //act
 	   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
 	      .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
 	   
 	   int status = mvcResult.getResponse().getStatus();
 	  
 	   String content = mvcResult.getResponse().getContentAsString();
 	   //assert
 	   assertEquals(200, status);
 	  // assertEquals(content, "client modifie");
 	}
    @Test
 	@DisplayName("Delete method")
 	public void d1() throws Exception {
    	//arrange
 		String uri = "/personnes/"+repository3.getlastid();
 		//act
 		   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
 		   int status = mvcResult.getResponse().getStatus();
 		   
 		   String content = mvcResult.getResponse().getContentAsString();
 		   //assert
 		   assertEquals(200, status);
 		   System.out.println("suppression"+status);
 		   //assertEquals(content, "client supprime");
 	}
}
