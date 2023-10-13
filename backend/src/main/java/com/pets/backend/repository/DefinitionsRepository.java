package com.pets.backend.repository;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pets.backend.models.Definitions;
import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Repository;

@Repository
public class DefinitionsRepository {

    @Cacheable("definitionsCache")
    public Definitions getAllDefinitions() {
        Definitions definitions = null;
        ObjectMapper objectMapper = new ObjectMapper();
//        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        try {
            File jsonFile = new File(getClass().getResource("/definitions.json").getFile());
            definitions = objectMapper.readValue(jsonFile, Definitions.class);
        } catch (IOException ex) {
            Logger.getLogger(DefinitionsRepository.class.getName()).log(Level.SEVERE, null, ex);
        }
        return definitions;
    }
}
