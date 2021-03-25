package com.example.demo.pts.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pts.domain.Participant;
import com.example.demo.pts.service.ParticipantServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/participants")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class ParticipantController {
	
	private final ParticipantServiceImpl service;
	
	@PostMapping("/register")
	public ResponseEntity<Participant> register(
			@Validated @RequestBody Participant participant) throws Exception {
		System.out.println("Participant register");
		
		service.save(participant);
		
		System.out.println("register participant.getParticipantNo = "
				+ participant.getParticipantNo());
		
		return new ResponseEntity<>(participant, HttpStatus.OK);
	}
	
	@PutMapping("/{participantNo}")
	public ResponseEntity<Participant> modify(
			@PathVariable("participantNo") Long participantNo, 
			@Validated @RequestBody Participant participant) throws Exception {
		System.out.println("Participant modify");
		
		participant.setParticipantNo(participantNo);
		service.save(participant);
		
		return new ResponseEntity<>(participant, HttpStatus.OK);
	}
	
	@DeleteMapping("/{participantNo}")
	public ResponseEntity<Void> delete(
			@PathVariable("participantNo") Long participantNo) throws Exception {
		System.out.println("Participant delete");
		
		service.deleteById(participantNo);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/{participantNo}")
	public ResponseEntity<Participant> detail(
			@PathVariable("participantNo") Long participantNo) throws Exception {
		System.out.println("Participant read");
		
		Participant participant = service.getOne(participantNo);
		
		return new ResponseEntity<>(participant, HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Participant>> list() throws Exception {
		System.out.println("Participant list");
		
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}
}
