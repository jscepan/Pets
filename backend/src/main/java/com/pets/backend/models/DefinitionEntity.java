package com.pets.backend.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.util.List;

public class DefinitionEntity {

    private String value;
    private String iconName;
    private DisplayValue displayValue;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<DefinitionEntity> childrens;

    public DefinitionEntity() {
    }

    public DefinitionEntity(String value, String iconName, DisplayValue displayValue, List<DefinitionEntity> childrens) {
        this.value = value;
        this.iconName = iconName;
        this.displayValue = displayValue;
        this.childrens = childrens;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getIconName() {
        return iconName;
    }

    public void setIconName(String iconName) {
        this.iconName = iconName;
    }

    public DisplayValue getDisplayValue() {
        return displayValue;
    }

    public void setDisplayValue(DisplayValue displayValue) {
        this.displayValue = displayValue;
    }

    public List<DefinitionEntity> getChildrens() {
        return childrens;
    }

    public void setChildrens(List<DefinitionEntity> childrens) {
        this.childrens = childrens;
    }

    public class DisplayValue {

        private String en;
        private String sr;

        public DisplayValue() {
        }

        public DisplayValue(String en, String sr) {
            this.en = en;
            this.sr = sr;
        }

        public String getEn() {
            return en;
        }

        public void setEn(String en) {
            this.en = en;
        }

        public String getSr() {
            return sr;
        }

        public void setSr(String sr) {
            this.sr = sr;
        }
    }
}
