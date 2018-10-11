package com.basarbk.adcampaign.model.vm;

import java.math.BigDecimal;

import com.basarbk.adcampaign.model.Campaign;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CampaignVM {
	
	private long id;

	private String name;

	private String goal;

	@JsonProperty(value = "total_budget")
	private BigDecimal totalBudget;

	private String status;

	public CampaignVM() {
		super();
	}
	
	public CampaignVM(Campaign campaign) {
		super();
		this.setId(campaign.getId());
		this.setName(campaign.getName());
		this.setGoal(campaign.getGoal());
		this.setTotalBudget(campaign.getTotalBudget());
		this.setStatus(campaign.getStatus());
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGoal() {
		return goal;
	}

	public void setGoal(String goal) {
		this.goal = goal;
	}

	public BigDecimal getTotalBudget() {
		return totalBudget;
	}

	public void setTotalBudget(BigDecimal totalBudget) {
		this.totalBudget = totalBudget;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	

}
