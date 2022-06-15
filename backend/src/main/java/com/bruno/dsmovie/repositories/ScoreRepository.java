package com.bruno.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bruno.dsmovie.entities.Score;
import com.bruno.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score,ScorePK> {

}
