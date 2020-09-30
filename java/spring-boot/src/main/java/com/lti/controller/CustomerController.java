package com.lti.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.lti.dto.Login;
import com.lti.dto.LoginStatus;
import com.lti.dto.PicUpload;
import com.lti.dto.Status;
import com.lti.entity.Customer;
import com.lti.exception.CustomerServiceException;
import com.lti.service.CustomerService;

@RestController
@CrossOrigin
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	
	
	//@Autowired
	//private MultipartFile multiPartFile;

	
	@PostMapping(path = "/register") //similar to @RequestMapping(path = "/register", method = RequestMethod.post)
	public Status register(@RequestBody Customer customer) {
		try{
			customerService.register(customer);
			Status status = new Status();
			status.setStatus(true);
			status.setStatusMessage("Registration Successful");
			status.setCustId(customerService.findCustId(customer.getEmail(), customer.getPassword()));
			//status.setCustId(id);
			return status;
		}
		catch(CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setStatusMessage("Registration Failed. "+ e.getMessage());
			return status;
		}
	}
	
	@PostMapping("/login")
	public LoginStatus login(@RequestBody Login login) {
		try {
			Customer customer = customerService.login(login.getEmail(), login.getPassword());
			LoginStatus loginStatus = new LoginStatus();
			loginStatus.setCustId(customerService.findCustId(customer.getEmail(), customer.getPassword()));
			loginStatus.setStatus(true);
			loginStatus.setStatusMessage("Login Successful");
			loginStatus.setName(customer.getName());
			return loginStatus;
		}
		catch(CustomerServiceException e) {
			LoginStatus loginStatus = new LoginStatus();
			loginStatus.setStatus(false);
			loginStatus.setStatusMessage("Login Failed. "+ e.getMessage());
			return loginStatus;
		}
		
	}
	
	@PostMapping("/pic-upload")
	public Status picUpload(PicUpload picUpload) {
		Customer customer = customerService.get(picUpload.getCustId());
		String imageUploadLocation = "g:/uploads/";
		String fileName = picUpload.getProfilePic().getOriginalFilename();
		String targetFile = imageUploadLocation + fileName;
		 
		try {
			picUpload.getProfilePic().transferTo(new File(targetFile));
			
		}
		catch(IOException e) {
			e.printStackTrace();
			Status status = new Status();
			status.setStatus(false);
			status.setStatusMessage("Pic upload Failed...");
			return status;
		}
		
		customer.setProfilePic(fileName);
		customerService.update(customer);
		
		Status status = new Status();
		status.setStatus(true);
		status.setStatusMessage("Pic uploaded Successfully....");
		return status;
	}
	
	@GetMapping("/profile")
	public Customer profile(@RequestParam("custId") int id, HttpServletRequest request) {
		Customer customer = customerService.get(id);
		
		//reding the project's deployed folder location
		String projPath = request.getServletContext().getRealPath("/");
		System.out.println(projPath); //check console
		String tempDownloadPath = projPath+ "/downloads/";
		//creating a folder within the project where we will place the profile pic of the customer getting fetched
		File f = new File(tempDownloadPath);
		if(!f.exists())
			f.mkdir();
		String targetFile = tempDownloadPath + customer.getProfilePic();
		String imageUploadLocation = "g:/uploads/";
		String sourceFile = imageUploadLocation + customer.getProfilePic();
		try {
			FileCopyUtils.copy(new File(sourceFile), new File(targetFile));
		}
		catch(IOException e) {
			e.printStackTrace();
		}
		
		return customer;
		
	}
		
}
