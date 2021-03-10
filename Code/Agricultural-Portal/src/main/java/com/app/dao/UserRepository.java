package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmailAndPassword(String email, String password);
	
//	@Query("select u from User u left outer join fetch u.addresses where u.email=:em and u.password=:pass")
//	Optional<User> findByEmailAndPassword(@Param("em") String email, @Param("pass") String password);

}
