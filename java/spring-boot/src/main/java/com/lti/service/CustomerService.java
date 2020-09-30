package com.lti.service;

import com.lti.entity.Customer;

public interface CustomerService {

	void register(Customer customer);

	Customer login(String email, String password);

	Customer get(int id);
	
	int findCustId(String email, String password);

	void update(Customer customer);

}