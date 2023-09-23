package com.pets.backend.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pets.backend.models.Definitions;
import com.pets.backend.util.Helper;
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
        try {
            String defJSON = Helper.readFromFile("definitions.json");
            definitions = objectMapper.readValue(defJSON, Definitions.class);
        } catch (IOException ex) {
            Logger.getLogger(DefinitionsRepository.class.getName()).log(Level.SEVERE, null, ex);
        }
        return definitions;
    }
}
