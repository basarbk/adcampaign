package com.basarbk.adcampaign;

import java.io.InputStream;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.basarbk.adcampaign.model.Campaign;
import com.basarbk.adcampaign.repository.CampaignRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootApplication
public class CampaignApplication {

	public static void main(String[] args) {
		SpringApplication.run(CampaignApplication.class, args);
	}
	
	  @Bean
	  @Profile("!test")
	  CommandLineRunner run(CampaignRepository campaignRepository) {
	    return (args) -> {
	      try(InputStream stream = Thread.currentThread().getContextClassLoader().getResourceAsStream("data.json")) {	    	  
	    	  ObjectMapper mapper = new ObjectMapper();
	    	  Campaign[] camps = mapper.readValue(stream, Campaign[].class);
	    	  for(Campaign camp : camps) {
	    		  camp.getPlatforms().values().stream().forEach(p -> {
	    			  p.setCampaign(camp);
	    			  p.getTargetAudiance().setPlatform(p);
	    			  p.getCreatives().setPlatform(p);
	    			  p.getInsights().setPlatform(p);
	    		  });
	    	  }
	    	  campaignRepository.saveAll(Arrays.asList(camps));
	      }
	      
	    };
	  }
}
