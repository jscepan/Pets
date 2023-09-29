package com.pets.backend.models;

import com.pets.backend.models.Ad.Currency;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "promotions")
public class Promotion extends BaseModel {

    @Column(name = "type")
    private String type;

    @Column(name = "title")
    private String title;

    @Column(name = "subtitle")
    private String subtitle;

    @Column(name = "description")
    private String description;

    @Column(name = "services")
    private String services;

    @Column(name = "price")
    private double price;

    @Column(name = "priceCurrency")
    @Enumerated(EnumType.STRING)
    private Currency priceCurrency;

    @Column(name = "freeOfCharge")
    private String freeOfCharge;

    @Column(name = "inactive")
    private boolean inactive;

    @Column(name = "createdOn")
    private Timestamp createdOn;
    
    public Promotion() {
    }

    public Promotion(String type, String title, String subtitle, String description, String services, double price, Currency priceCurrency, String freeOfCharge, boolean inactive, Timestamp createdOn) {
        this.type = type;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.services = services;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.freeOfCharge = freeOfCharge;
        this.inactive = inactive;
        this.createdOn = createdOn;
    }

    public Promotion(String type, String title, String subtitle, String description, String services, double price, Currency priceCurrency, String freeOfCharge, boolean inactive, Timestamp createdOn, Long id) {
        super(id);
        this.type = type;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.services = services;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.freeOfCharge = freeOfCharge;
        this.inactive = inactive;
        this.createdOn = createdOn;
    }

    public Promotion(String type, String title, String subtitle, String description, String services, double price, Currency priceCurrency, String freeOfCharge, boolean inactive, Timestamp createdOn, String oid, long id) {
        super(oid, id);
        this.type = type;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.services = services;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.freeOfCharge = freeOfCharge;
        this.inactive = inactive;
        this.createdOn = createdOn;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getServices() {
        return services;
    }

    public void setServices(String services) {
        this.services = services;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Currency getPriceCurrency() {
        return priceCurrency;
    }

    public void setPriceCurrency(Currency priceCurrency) {
        this.priceCurrency = priceCurrency;
    }

    public String getFreeOfCharge() {
        return freeOfCharge;
    }

    public void setFreeOfCharge(String freeOfCharge) {
        this.freeOfCharge = freeOfCharge;
    }

    public boolean isInactive() {
        return inactive;
    }

    public void setInactive(boolean inactive) {
        this.inactive = inactive;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

    @Override
    public String toString() {
        return "Promotion{" + "type=" + type + ", title=" + title + ", subtitle=" + subtitle + ", description=" + description + ", services=" + services + ", price=" + price + ", priceCurrency=" + priceCurrency + ", freeOfCharge=" + freeOfCharge + ", inactive=" + inactive + ", createdOn=" + createdOn + '}';
    }
}
