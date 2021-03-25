package com.example.demo.pts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.pts.domain.Participant;

interface ParticipantCustomRepository {
	
	@Query(value = "INSERT INTO participants(name, gender, phone_number, email, birthday, reg_date) "
			+ "values(:name, :gender, :phone_number, :email, :birthday, :regdate)", nativeQuery = true)
	Participant save(
			@Param("name") String name, @Param("gender") String gender, @Param("phone_number") String phoneNumber,
			@Param("email") String email, @Param("birthday") String birthday, @Param("regdate") String regdate);
	
	
}

public interface ParticipantRepository extends JpaRepository<Participant, Long>, ParticipantCustomRepository {
	
	
}
