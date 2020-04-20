package com.george.challenge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.george.challenge.beans.EventObj;

@Repository
public interface EventRepository extends JpaRepository<EventObj, Long>{

}
