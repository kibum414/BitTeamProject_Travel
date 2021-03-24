package com.example.demo.pts.service;

import java.util.List;

import com.example.demo.pts.domain.ParticipantDto;

public interface ParticipantService {
	
	public void register(ParticipantDto participantDto) throws Exception;
	
	public void modify(ParticipantDto participantDto) throws Exception;
	
	public void remove(Long participantNo) throws Exception;
	
	public ParticipantDto detail(Long participantNo) throws Exception;
	
	public List<ParticipantDto> list() throws Exception;
	
}
