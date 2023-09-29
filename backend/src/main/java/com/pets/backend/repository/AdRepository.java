package com.pets.backend.repository;

import com.pets.backend.models.Ad;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdRepository extends JpaRepository<Ad, Long> {

    List<Ad> findByTitleContaining(String title);
}
