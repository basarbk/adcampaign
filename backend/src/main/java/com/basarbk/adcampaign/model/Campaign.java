package com.basarbk.adcampaign.model;

import java.math.BigDecimal;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(value = JsonInclude.Include.NON_EMPTY)
public class Campaign {

	@Id
	// @GeneratedValue - data.json already have id's so using them
	private long id;

	private String name;

	private String goal;

	@JsonProperty(value = "total_budget")
	private BigDecimal totalBudget;

	private String status;
	
	@OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("campaign")
	Map<String, Platform> platforms;

	public Campaign() {
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

	public BigDecimal getTotalBudget() {
		return totalBudget;
	}

	public void setTotalBudget(BigDecimal totalBudget) {
		this.totalBudget = totalBudget;
	}

	public String getGoal() {
		return goal;
	}

	public void setGoal(String goal) {
		this.goal = goal;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

	public Map<String, Platform> getPlatforms() {
		return platforms;
	}

	public void setPlatforms(Map<String, Platform> platforms) {
		this.platforms = platforms;
	}
}