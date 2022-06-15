package com.bruno.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bruno.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie,Long> {

}
