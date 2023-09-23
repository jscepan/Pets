package com.pets.backend.models;

import java.util.List;

public class Definitions {

    private String version;
    private List<DefinitionEntity> adsType;

    public Definitions() {
    }

    public Definitions(List<DefinitionEntity> adsType, String version) {
        this.adsType = adsType;
        this.version = version;
    }

    public List<DefinitionEntity> getAdsType() {
        return adsType;
    }

    public void setAdsType(List<DefinitionEntity> adsType) {
        this.adsType = adsType;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

}
