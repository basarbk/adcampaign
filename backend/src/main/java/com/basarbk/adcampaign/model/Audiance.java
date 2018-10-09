package com.basarbk.adcampaign.model;

import java.util.List;

import javax.persistence.ElementCollection;
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
public class Audiance {

	@Id
	@GeneratedValue
	@JsonIgnore
	private long id;

	@ElementCollection
	private List<String> languages;

	@ElementCollection
	private List<Gender> genders;

	@ElementCollection
	@JsonProperty(value = "KeyWords")
	private List<String> keywords;

	@JsonProperty(value = "age_range")
	@ElementCollection
	private List<Integer> ageRange;

	@ElementCollection
	private List<String> locations;

	@ElementCollection
	private List<String> interests;

	@OneToOne
	private Platform platform;

	public Audiance() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<String> getLanguages() {
		return languages;
	}

	public void setLanguages(List<String> languages) {
		this.languages = languages;
	}

	public List<Gender> getGenders() {
		return genders;
	}

	public void setGenders(List<Gender> genders) {
		this.genders = genders;
	}

	public List<String> getKeywords() {
		return keywords;
	}

	public void setKeywords(List<String> keywords) {
		this.keywords = keywords;
	}

	public List<Integer> getAgeRange() {
		return ageRange;
	}

	public void setAgeRange(List<Integer> ageRange) {
		this.ageRange = ageRange;
	}

	public List<String> getLocations() {
		return locations;
	}

	public void setLocations(List<String> locations) {
		this.locations = locations;
	}

	public List<String> getInterests() {
		return interests;
	}

	public void setInterests(List<String> interests) {
		this.interests = interests;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

}