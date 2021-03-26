package com.example.demo.pts.domain;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class ParticipantDto implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private long participantNo;
	private String name;
	private String gender;
	private String phoneNumber;
	private String email;
	private String birthday;
	private String regdate;
	
}
