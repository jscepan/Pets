package com.pets.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "countries")
public class Country extends BaseModel {

    @NotBlank
    @Column(name = "value")
    private String value;

    public Country() {
    }

    public Country(String value) {
        this.value = value;
    }

    public Country(String value, Long id) {
        super(id);
        this.value = value;
    }

    public Country(String value, String oid, long id) {
        super(oid, id);
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
