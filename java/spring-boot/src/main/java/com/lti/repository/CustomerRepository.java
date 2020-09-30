package com.lti.repository;

import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.Customer;

public interface CustomerRepository {

	int save(Customer customer);

	Customer findById(int id);

	int findByEmailAndPassword(String email, String password);

	boolean isCustomerPresent(String email);

}