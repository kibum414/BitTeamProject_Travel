package com.example.demo.pts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pts.domain.Participant;
import com.example.demo.pts.domain.ParticipantDto;
import com.example.demo.pts.service.ParticipantServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/participants")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class ParticipantController {
	
	private final ParticipantServiceImpl service;
	
	@PostMapping("")
	public ResponseEntity<Participant> register(
			@Validated @RequestBody Participant participant) throws Exception {
		System.out.println("Participant register");
		
		service.save(participant);
		
		System.out.println("register Participant.getParticipantNo = "
				+ participant.getParticipantNo());
		
		return new ResponseEntity<>(participant, HttpStatus.OK);
	}
	
	/*
	@PutMapping("/{ParticipantDtoNo}")
	public ResponseEntity<ParticipantDto> modify(
			@PathVariable("ParticipantDtoNo") Long ParticipantDtoNo, 
			@Validated @RequestBody ParticipantDto ParticipantDto) throws Exception {
		System.out.println("ParticipantDto modify");
		
		ParticipantDto.setParticipantDtoNo(ParticipantDtoNo);
		service.modify(ParticipantDto);
		
		return new ResponseEntity<>(ParticipantDto, HttpStatus.OK);
	}
	
	@DeleteMapping("/{ParticipantDtoNo}")
	public ResponseEntity<Void> delete(
			@PathVariable("ParticipantDtoNo") Long ParticipantDtoNo) throws Exception {
		System.out.println("ParticipantDto delete");
		
		service.delete(ParticipantDtoNo);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/{ParticipantDtoNo}")
	public ResponseEntity<ParticipantDto> detail(
			@PathVariable("ParticipantDtoNo") Long ParticipantDtoNo) throws Exception {
		System.out.println("ParticipantDto read");
		
		ParticipantDto ParticipantDto = service.detail(ParticipantDtoNo);
		
		return new ResponseEntity<>(ParticipantDto, HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<ParticipantDto>> list() throws Exception {
		System.out.println("ParticipantDto list");
		
		return new ResponseEntity<>(service.list(), HttpStatus.OK);
	}
	*/
}
