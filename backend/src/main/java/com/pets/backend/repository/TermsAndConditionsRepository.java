package com.pets.backend.repository;

import com.pets.backend.models.Promotion;
import com.pets.backend.models.TermsAndConditions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TermsAndConditionsRepository extends JpaRepository<TermsAndConditions, Long> {

}
