package com.cheese.cheese;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GifService {
	@Autowired
	private GifRepository repo;
	
	public List<Gif> listAll(){
		return repo.findAll();
	}
	public void save(Gif gif) {
		repo.save(gif);
	}
	public Gif get(Long id){
		return repo.findById(id).get();
		}
	public void delete(Long id) {
		repo.deleteById(id);
	}
}
