package com.example.demo.pts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.pts.domain.Participant;

interface ParticipantCustomRepository {
	
	/*@Query("INSERT INTO participants(name, gender, phone_number, email, birthday, regdate) "
			+ "values(:name, :gender, :phone_number, :email, :birthday, :regdate)")
	Participant save(
			@Param("name") String name, @Param("gender") String gender, @Param("phone_number") String phoneNumber,
			@Param("email") String email, @Param("birthday") String birthday, @Param("regdate") String regdate);
	*/
	
}

public interface ParticipantRepository extends JpaRepository<Participant, Long>, ParticipantCustomRepository {
	
	
}
