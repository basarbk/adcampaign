package com.basarbk.adcampaign;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.basarbk.adcampaign.exception.NotFoundException;
import com.basarbk.adcampaign.model.Campaign;
import com.basarbk.adcampaign.repository.CampaignRepository;
import com.basarbk.adcampaign.service.CampaignService;
import com.basarbk.adcampaign.util.EntityUtil;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class CampaignServiceTest {
	
	CampaignService campaignService;
	
	@MockBean
	CampaignRepository campaignRepository;
	
	@Before
	public void init(){
		campaignService = new CampaignService(campaignRepository);
	}
	
	@Test(expected=NotFoundException.class)
	public void findById_whenIdUnknown_throwsException(){
		campaignService.findById(5);
	}
	
	@Test
	public void findById_whenExistingCampaignIdRequested_returnsCampaign(){
		Campaign inRepo = EntityUtil.createCampaign(1L, "Test Campaign");
		
		Mockito.when(campaignRepository.findById(1L)).thenReturn(Optional.of(inRepo));
		
		Campaign campaign = campaignService.findById(1L);
		assertThat(campaign).isNotNull();
		assertThat(campaign.getName()).isEqualTo(inRepo.getName());
	}

}
