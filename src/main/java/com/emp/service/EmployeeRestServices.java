package com.emp.service;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
public class EmployeeRestServices {

private final EmployeeRepository repository;
	
	public EmployeeRestServices(EmployeeRepository repository) {
		super();
		this.repository = repository;
	}
	
	@GetMapping
	public Iterable<Employee> getAllEmployees(){
		return this.repository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable("id") Integer id) {
		Optional<Employee> empData = repository.findById(id);
		
		if (empData.isPresent()) {
		      return new ResponseEntity<>(empData.get(), HttpStatus.OK);
		    } else {
		      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		    }
	}
	
	 @PostMapping("/add")
	  public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee) {
	    try {
	      Employee emp = repository.save(employee);
	      return new ResponseEntity<>(emp, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	
	

	
	
}
