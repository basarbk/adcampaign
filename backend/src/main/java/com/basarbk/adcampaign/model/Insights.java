package com.basarbk.adcampaign.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(value = JsonInclude.Include.NON_EMPTY)
public class Insights {

	@Id
	@GeneratedValue
	@JsonIgnore
	private long id;

	private long impressions;

	private long clicks;

	@JsonProperty(value = "nanos_score")
	private double nanosScore;

	@JsonProperty(value = "cost_per_click")
	private double costPerClick;

	@JsonProperty(value = "click_through_rate")
	private double clickThroughRate;

	@JsonProperty(value = "advanced_kpi_1")
	private double advancedKPI1;

	@JsonProperty(value = "advanced_kpi_2")
	private double advancedKPI2;

	@JsonProperty(value = "website_visits")
	private Long websiteVisits;

	@OneToOne
	private Platform platform;

	public Insights() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getImpressions() {
		return impressions;
	}

	public void setImpressions(long impressions) {
		this.impressions = impressions;
	}

	public long getClicks() {
		return clicks;
	}

	public void setClicks(long clicks) {
		this.clicks = clicks;
	}

	public double getNanosScore() {
		return nanosScore;
	}

	public void setNanosScore(double nanosScore) {
		this.nanosScore = nanosScore;
	}

	public double getCostPerClick() {
		return costPerClick;
	}

	public void setCostPerClick(double costPerClick) {
		this.costPerClick = costPerClick;
	}

	public double getClickThroughRate() {
		return clickThroughRate;
	}

	public void setClickThroughRate(double clickThroughRate) {
		this.clickThroughRate = clickThroughRate;
	}

	public double getAdvancedKPI1() {
		return advancedKPI1;
	}

	public void setAdvancedKPI1(double advancedKPI1) {
		this.advancedKPI1 = advancedKPI1;
	}

	public double getAdvancedKPI2() {
		return advancedKPI2;
	}

	public void setAdvancedKPI2(double advancedKPI2) {
		this.advancedKPI2 = advancedKPI2;
	}

	public Long getWebsiteVisits() {
		return websiteVisits;
	}

	public void setWebsiteVisits(Long websiteVisits) {
		this.websiteVisits = websiteVisits;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

}