package com.basarbk.adcampaign.util;

import com.basarbk.adcampaign.model.Campaign;

public class EntityUtil {
	
	public static Campaign createCampaign(long id, String name){
		Campaign campaign = new Campaign();
		campaign.setId(id);
		campaign.setName(name);
		return campaign;
	}

}
