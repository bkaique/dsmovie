package com.bruno.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bruno.dsmovie.dto.MovieDTO;
import com.bruno.dsmovie.dto.ScoreDTO;
import com.bruno.dsmovie.entities.Movie;
import com.bruno.dsmovie.entities.Score;
import com.bruno.dsmovie.entities.User;
import com.bruno.dsmovie.repositories.MovieRepository;
import com.bruno.dsmovie.repositories.ScoreRepository;
import com.bruno.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	@Autowired
	private MovieRepository movierepository;
	@Autowired
	private UserRepository userrepository;
	
	@Autowired
	private ScoreRepository scorerepository;
	
	@Transactional
	public MovieDTO SaveScore(ScoreDTO dto) {
		User user = userrepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userrepository.saveAndFlush(user);
			
		}
		
		Movie movie = movierepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scorerepository.saveAndFlush(score);
		
		double total = 0.0;
		for (Score s: movie.getScores()) {
			total = total + s.getValue();
			
		}
		
		double avg = total / movie.getScores().size();
		movie.setCount( movie.getScores().size());
		movie.setScore(avg);
		
		movie = movierepository.save(movie);
		return new MovieDTO(movie);
	}

}
