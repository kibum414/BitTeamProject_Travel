package com.example.demo.uss.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.uss.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

	@Transactional
	@Query(value = "SELECT username FROM users WHERE username = :username AND password = :password", nativeQuery = true)
	public String login(@Param("username") String username, @Param("password") String password);
}
