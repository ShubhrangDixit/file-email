package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.lti.entity.Customer;
import com.lti.exception.CustomerServiceException;
import com.lti.repository.CustomerRepository;
import com.lti.repository.CustomerRepositoryImpl;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired 
	private EmailService emailService;

	@Override
	public void register(Customer customer) {
		if(!customerRepository.isCustomerPresent(customer.getEmail())) {
			customerRepository.save(customer);
			//code to send email to recently registered customer
			emailService.sendMailForNewRegisteration(customer);
			
			
		}
		else
			throw new CustomerServiceException("Customer Already Registered");
	}
	
	
	@Override
	public Customer login(String email, String password) {
		try {
			if(!customerRepository.isCustomerPresent(email)) {
				throw new CustomerServiceException("Customer is not registered!");
			}
			int id = customerRepository.findByEmailAndPassword(email, password);
			return get(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new CustomerServiceException("Invalid Email/Password");
		}
		
//		Integer id = customerRepository.findByEmailAndPassword(email, password);
//		if(id != null)
//			return get(id);
//		else
//			throw new CustomerServiceException("Email or Password is wrong");
	}
	
	@Override
	public int findCustId(String email, String password) {
		return customerRepository.findByEmailAndPassword(email, password);
	}

	@Override
	public Customer get(int id) {
		return customerRepository.findById(id);
	}
	

	@Override
	public void update(Customer customer) {
		customerRepository.save(customer);
	}
	
}
