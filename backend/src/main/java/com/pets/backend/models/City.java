package com.pets.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "cities",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "value")})
public class City extends BaseModel {

    @NotBlank
    @Column(name = "value")
    private String value;

    @NotBlank
    @Column(name = "zipCode")
    private String zipCode;

    @NotBlank
    @ManyToOne()
    private Country country;

    public City() {
    }

    public City(String value, String zipCode, Country country) {
        this.value = value;
        this.zipCode = zipCode;
        this.country = country;
    }

    public City(String value, String zipCode, Country country, Long id) {
        super(id);
        this.value = value;
        this.zipCode = zipCode;
        this.country = country;
    }

    public City(String value, String zipCode, Country country, String oid, long id) {
        super(oid, id);
        this.value = value;
        this.zipCode = zipCode;
        this.country = country;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }
}
