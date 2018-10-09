package com.basarbk.adcampaign.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.util.UrlPathHelper;

@RestControllerAdvice
public class RestExceptionAdvice {
	
	UrlPathHelper urlHelper = new UrlPathHelper();
	
	@ExceptionHandler(NotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public ApiError processNotFoundException(NotFoundException exception, HttpServletRequest request) {
		return new ApiError(404, exception.getMessage(), urlHelper.getPathWithinApplication(request));
	}
	
}
