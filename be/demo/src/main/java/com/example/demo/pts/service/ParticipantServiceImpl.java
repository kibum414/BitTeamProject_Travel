package com.example.demo.pts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.example.demo.cmm.service.AbstractService;
import com.example.demo.pts.domain.Participant;
import com.example.demo.pts.repository.ParticipantRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ParticipantServiceImpl extends AbstractService<Participant> implements ParticipantService {

	private final ParticipantRepository repo;

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsById(long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Participant> findAll() {
		return repo.findAll();
	}

	@Override
	public Optional<Participant> findOne(Example<Participant> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteById(long id) {
		repo.deleteById(id);
	}

	@Override
	public Optional<Participant> findById(long id) {
		return repo.findById(id);
	}

	@Override
	public Participant save(Participant entity) {
		return repo.save(entity);
	}

	@Override
	public Participant getOne(long id) {
		return repo.getOne(id);
	}

	@Override
	public Participant modify(long id, Participant participant) {
		participant.setParticipantNo(id);
		
		repo.modify(participant.getName(), participant.getGender(), participant.getPhoneNumber(),
				participant.getEmail(), participant.getBirthday(), participant.getParticipantNo());
		System.out.println(participant);
		
		return participant;
	}

}
