package com.bruno.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bruno.dsmovie.entities.Movie;

public interface MoviRepository extends JpaRepository<Movie,Long> {

}
