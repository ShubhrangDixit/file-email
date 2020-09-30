package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.Customer;

@Repository
public class CustomerRepositoryImpl implements CustomerRepository {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	
	@Override
	@Transactional
	public int save(Customer customer) {
		Customer updatedCust = entityManager.merge(customer);
		return updatedCust.getId();
	}
	
	
	@Override
	public Customer findById(int id) {
		return entityManager.find(Customer.class, id);
	}
	

	@Override
	public int findByEmailAndPassword(String email, String password) {
		return (Integer)entityManager
						.createQuery("select c.id from Customer c where c.email = :em and c.password = :ps")
						.setParameter("em", email)
						.setParameter("ps", password)
						.getSingleResult();
	}
	

	@Override
	public boolean isCustomerPresent(String email) {
		return (Long)entityManager
						.createQuery("select count(c.id) from Customer c where c.email = :em")
						.setParameter("em", email)
						.getSingleResult() == 1 ? true : false;
	}
}
