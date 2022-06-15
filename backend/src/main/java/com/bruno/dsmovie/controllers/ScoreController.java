package com.bruno.dsmovie.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bruno.dsmovie.dto.MovieDTO;
import com.bruno.dsmovie.dto.ScoreDTO;
import com.bruno.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/score")
public class ScoreController {

	@Autowired
	private ScoreService service;
	@PutMapping
	public MovieDTO SaveScore(@RequestBody ScoreDTO score) {
		MovieDTO movieDto = service.SaveScore(score);

		return movieDto;
	}
}
