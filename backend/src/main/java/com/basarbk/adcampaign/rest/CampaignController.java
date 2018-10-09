package com.basarbk.adcampaign.rest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.basarbk.adcampaign.model.Campaign;
import com.basarbk.adcampaign.service.CampaignService;

@RestController
@RequestMapping("/api")
public class CampaignController {

	CampaignService campaignService;

	public CampaignController(CampaignService campaignService) {
		super();
		this.campaignService = campaignService;
	}
	
	@GetMapping("/campaigns")
	Page<Campaign> getAllCampaigns(Pageable page){
		return campaignService.findAll(page);
	}
	
	@GetMapping("/campaigns/{id:[0-9]+}")
	Campaign getCampaignById(@PathVariable long id){
		return campaignService.findById(id);
	}
	
	
}
