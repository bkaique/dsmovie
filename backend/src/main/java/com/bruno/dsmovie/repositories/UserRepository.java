package com.bruno.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bruno.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {

	User findByEmail(String email);

}
