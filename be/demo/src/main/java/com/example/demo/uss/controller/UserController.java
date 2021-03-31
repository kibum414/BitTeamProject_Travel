package com.example.demo.uss.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
	public ResponseEntity<?> register(@RequestBody User user) {
		System.out.println("User Register");
		
		service.save(user);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
