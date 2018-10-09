package com.basarbk.adcampaign.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(value = JsonInclude.Include.NON_EMPTY)
public class Platform {

	@Id
	@GeneratedValue
	@JsonIgnore
	private long id;

	private String status;

	@JsonProperty(value = "total_budget")
	private BigDecimal totalBudget;

	@JsonProperty(value = "remaining_budget")
	private BigDecimal remainingBudget;

	@JsonProperty(value = "start_date")
	@JsonFormat(shape = JsonFormat.Shape.NUMBER)
	private Date startDate;

	@JsonProperty(value = "end_date")
	@JsonFormat(shape = JsonFormat.Shape.NUMBER)
	private Date endDate;

	@ManyToOne
	private Campaign campaign;

	@OneToOne(mappedBy = "platform", cascade = CascadeType.ALL)
	@JsonProperty(value = "target_audiance")
	@JsonIgnoreProperties("platform")
	private Audiance targetAudiance;

	@OneToOne(mappedBy = "platform", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("platform")
	private Creatives creatives;

	@OneToOne(mappedBy = "platform", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("platform")
	private Insights insights;

	public Platform() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public BigDecimal getTotalBudget() {
		return totalBudget;
	}

	public void setTotalBudget(BigDecimal totalBudget) {
		this.totalBudget = totalBudget;
	}

	public BigDecimal getRemainingBudget() {
		return remainingBudget;
	}

	public void setRemainingBudget(BigDecimal remainingBudget) {
		this.remainingBudget = remainingBudget;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Campaign getCampaign() {
		return campaign;
	}

	public void setCampaign(Campaign campaign) {
		this.campaign = campaign;
	}

	public Audiance getTargetAudiance() {
		return targetAudiance;
	}

	public void setTargetAudiance(Audiance targetAudiance) {
		this.targetAudiance = targetAudiance;
	}

	public Creatives getCreatives() {
		return creatives;
	}

	public void setCreatives(Creatives creatives) {
		this.creatives = creatives;
	}

	public Insights getInsights() {
		return insights;
	}

	public void setInsights(Insights insights) {
		this.insights = insights;
	}

}