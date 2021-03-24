package com.example.demo.pts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pts.domain.ParticipantDto;
import com.example.demo.pts.service.ParticipantServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/participants")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class ParticipantController {
	
	private final ParticipantServiceImpl service;
	
	@PostMapping("/register")
	public ResponseEntity<ParticipantDto> register(@Validated @RequestBody ParticipantDto participantDto) throws Exception {
		System.out.println("Participant register");
		
		service.register(participantDto);
		
		System.out.println("register participantDto.getParticipantNo = " + participantDto.getParticipantNo());
		
		return new ResponseEntity<>(participantDto, HttpStatus.OK);
	}
	
	@PostMapping("/modify")
	public ResponseEntity<ParticipantDto> modify(@Validated @RequestBody ParticipantDto participantDto) throws Exception {
		
		
		return new ResponseEntity<>(participantDto, HttpStatus.OK);
	}
}
