package com.pets.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "cities")
public class City extends BaseModel {

    @NotBlank
    @Size(max = 150)
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "country")
    private String country;

    public City() {
    }

    public City(String name, String country) {
        this.name = name;
        this.country = country;
    }

    public City(String name, String country, Long id) {
        super(id);
        this.name = name;
        this.country = country;
    }

    public City(String name, String country, String oid, long id) {
        super(oid, id);
        this.name = name;
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
