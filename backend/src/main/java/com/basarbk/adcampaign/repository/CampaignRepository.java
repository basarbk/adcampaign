package com.basarbk.adcampaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.basarbk.adcampaign.model.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long>{

}
