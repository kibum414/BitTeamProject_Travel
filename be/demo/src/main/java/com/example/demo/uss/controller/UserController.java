package com.example.demo.uss.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.uss.domain.User;
import com.example.demo.uss.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="*")
@RequiredArgsConstructor
public class UserController {
	
	private final UserServiceImpl service;
	
	@PostMapping("")
	public ResponseEntity<?> register(@RequestBody User user) throws Exception {
		
		System.out.println("User Register");
		
		service.save(user);
		
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<User>> list() throws Exception {
		
		System.out.println("User List");
		
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{userNo}")
	public ResponseEntity<Optional<User>> read(
			@PathVariable("userNo") Long userNo) throws Exception {
		
		System.out.println("User Read");
		
		return new ResponseEntity<>(service.findById(userNo), HttpStatus.OK);
	}
	
	@PutMapping("/{userNo}")
	public ResponseEntity<User> update(
			@PathVariable("userNo") Long userNo, @RequestBody User user) {
		
		System.out.println("User Update");
		
		return new ResponseEntity<>(service.save(user), HttpStatus.OK);
	}
	
	@DeleteMapping("/{userNo}")
	public ResponseEntity<Void> delete(
			@PathVariable("userNo") Long userNo) {
		
		System.out.println("User Delete");
		
		service.deleteById(userNo);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody User user) {
		System.out.println("User Login");
		
		String username = service.login(user);
		
		if (username != null) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
}
