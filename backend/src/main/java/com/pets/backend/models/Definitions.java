package com.pets.backend.models;

import java.util.List;

public class Definitions {

    private String version;
    private List<DefinitionEntity> countries;
    private List<DefinitionEntity> adsType;

    public Definitions() {
    }

    public Definitions(String version, List<DefinitionEntity> countries, List<DefinitionEntity> adsType) {
        this.version = version;
        this.countries = countries;
        this.adsType = adsType;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public List<DefinitionEntity> getCountries() {
        return countries;
    }

    public void setCountries(List<DefinitionEntity> countries) {
        this.countries = countries;
    }

    public List<DefinitionEntity> getAdsType() {
        return adsType;
    }

    public void setAdsType(List<DefinitionEntity> adsType) {
        this.adsType = adsType;
    }

}
