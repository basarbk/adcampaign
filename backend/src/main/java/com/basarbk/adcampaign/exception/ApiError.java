package com.basarbk.adcampaign.exception;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class ApiError {
	
	private long timestamp;
	private int status;
	private String message;
	private String path;
	private Map<String, String> errors;

	public ApiError() {
		super();
	}

	public ApiError(int status, String message, String path) {
		super();
		this.timestamp = LocalDateTime.now().toEpochSecond(ZoneOffset.UTC);
		this.status = status;
		this.message = message;
		this.path = path;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Map<String, String> getErrors() {
		return errors;
	}

	public void setErrors(Map<String, String> errors) {
		this.errors = errors;
	}

}