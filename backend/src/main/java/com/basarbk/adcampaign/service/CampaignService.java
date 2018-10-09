package com.basarbk.adcampaign.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.basarbk.adcampaign.exception.NotFoundException;
import com.basarbk.adcampaign.model.Campaign;
import com.basarbk.adcampaign.repository.CampaignRepository;

@Service
public class CampaignService {
	
	CampaignRepository campaignRepository;

	public CampaignService(CampaignRepository campaignRepository) {
		super();
		this.campaignRepository = campaignRepository;
	}
	
	public Page<Campaign> findAll(Pageable page){
		return campaignRepository.findAll(page);
	}
	
	public Campaign findById(long id){
		return campaignRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Campaign not found"));
	}

}
