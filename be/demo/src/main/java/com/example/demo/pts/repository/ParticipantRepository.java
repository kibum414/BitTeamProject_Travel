package com.example.demo.pts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.pts.domain.Participant;

interface ParticipantCustomRepository {
	
}

public interface ParticipantRepository extends JpaRepository<Participant, Long>, ParticipantCustomRepository {
	/*
	@Modifying
	@Query(value = "INSERT INTO participants(name, gender, phone_number, email, birthday, reg_date) "
			+ "values(:name, :gender, :phone_number, :email, :birthday, :reg_date)", nativeQuery = true)
	public Participant save(
			@Param("name") String name, @Param("gender") String gender, @Param("phone_number") String phoneNumber,
			@Param("email") String email, @Param("birthday") String birthday, @Param("reg_date") String regdate);
	
	*/
	@Transactional
	@Modifying
	@Query(value = "UPDATE participants SET name = :name, gender = :gender, phone_number = :phone_number, "
			+ "email = :email, birthday = :birthday", nativeQuery = true)
	public void modify(
			@Param("name") String name, @Param("gender") String gender, @Param("phone_number") String phoneNumber,
			@Param("email") String email, @Param("birthday") String birthday);
	
}
