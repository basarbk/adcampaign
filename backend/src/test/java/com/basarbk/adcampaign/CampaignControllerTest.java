package com.basarbk.adcampaign;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.basarbk.adcampaign.exception.ApiError;
import com.basarbk.adcampaign.model.Campaign;
import com.basarbk.adcampaign.repository.CampaignRepository;
import com.basarbk.adcampaign.util.EntityUtil;
import com.basarbk.adcampaign.util.PageImpl;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class CampaignControllerTest {
	
	private static final String CAMPAIGN_PATH = "/api/campaigns";
	
	@Autowired
	TestRestTemplate testRestTemplate;
	
	@Autowired
	CampaignRepository campaignRepository;
	
	@Before
	public void init(){
		campaignRepository.deleteAll();
	}
	
	@Test
	public void getAllCampaigns_whenDBEmpty_returnsEmptyPage(){
		ResponseEntity<PageImpl<Campaign>> result = testRestTemplate
				.exchange(CAMPAIGN_PATH, HttpMethod.GET, null, new ParameterizedTypeReference<PageImpl<Campaign>>() {});

		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getTotalElements()).isEqualTo(0);
	}
	
	@Test
	public void getAllCampaigns_whenDBHasCampaigns_returnsPageWithCampaigns(){
		campaignRepository.save(EntityUtil.createCampaign(5, "Campaign 1"));
		campaignRepository.save(EntityUtil.createCampaign(10, "Campaign 2"));
		campaignRepository.save(EntityUtil.createCampaign(15, "Campaign 3"));
		
		ResponseEntity<PageImpl<Campaign>> result = testRestTemplate
				.exchange(CAMPAIGN_PATH, HttpMethod.GET, null, new ParameterizedTypeReference<PageImpl<Campaign>>() {});

		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getTotalElements()).isEqualTo(3);
	}
	
	@Test
	public void getAllCampaigns_whenDBHasCampaignsAndLimitedSizeOfPageRequested_returnsPageWithCampaigns(){
		campaignRepository.save(EntityUtil.createCampaign(5, "Campaign 1"));
		campaignRepository.save(EntityUtil.createCampaign(10, "Campaign 2"));
		campaignRepository.save(EntityUtil.createCampaign(15, "Campaign 3"));
		campaignRepository.save(EntityUtil.createCampaign(20, "Campaign 4"));
		
		ResponseEntity<PageImpl<Campaign>> result = testRestTemplate
				.exchange(CAMPAIGN_PATH + "?page=0&size=2", HttpMethod.GET, null, new ParameterizedTypeReference<PageImpl<Campaign>>() {});

		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getTotalElements()).isEqualTo(4);
		assertThat(result.getBody().getSize()).isEqualTo(2);
	}
	
	@Test
	public void getCampaignById_whenCampaignDoesntExist_return404WithApiErrorMessage(){
		String requestPath = CAMPAIGN_PATH + "/1";
		ResponseEntity<ApiError> result = testRestTemplate
				.exchange(requestPath, HttpMethod.GET, null, new ParameterizedTypeReference<ApiError>() {});
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
		assertThat(result.getBody().getMessage()).contains("Campaign not found");
	}

	@Test
	public void getCampaignById_whenCampaignExists_returnCampaignObject(){
		Campaign campaignInDB = campaignRepository.save(EntityUtil.createCampaign(1, "Campaign 1"));
		String requestPath = CAMPAIGN_PATH + "/" +campaignInDB.getId();
		ResponseEntity<Campaign> result = testRestTemplate
				.exchange(requestPath, HttpMethod.GET, null, new ParameterizedTypeReference<Campaign>() {});
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(result.getBody().getId()).isEqualTo(campaignInDB.getId());
	}
}
