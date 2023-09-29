package com.pets.backend.models;

import jakarta.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "ads")
public class Ad extends BaseModel {

    @Column(name = "adType")
    private String adType;

    @Column(name = "category")
    private String category;

    @Column(name = "subcategory")
    private String subcategory;

    @Column(name = "title")
    private String title;

    @Column(name = "adSellType")
    private SellType sellType;

    @Column(name = "price")
    private double price;

    @Column(name = "priceCurrency")
    private PriceCurrency priceCurrency;

    @Column(name = "priceIsFixed")
    private boolean priceIsFixed;

    @Column(name = "freeOfCharge")
    private boolean freeOfCharge;

    @Column(name = "description")
    private String description;

    @Column(name = "images")
    private List<Image> images;

    @Column(name = "country")
    private String country;

    @Column(name = "city")
    private City city;

    @Column(name = "contactName")
    private String contactName;

    @Column(name = "contactPhone")
    private String contactPhone;

    @Column(name = "promotion")
    private Promotion promotion;

    @Column(name = "inactive")
    private boolean inactive;

    @Column(name = "createdOn")
    private Timestamp createdOn;

    public Ad() {
    }

    public Ad(String adType, String category, String subcategory, String title, SellType sellType, double price, PriceCurrency priceCurrency, boolean priceIsFixed, boolean freeOfCharge, String description, List<Image> images, String country, City city, String contactName, String contactPhone, Promotion promotion, boolean inactive, Timestamp createdOn) {
        this.adType = adType;
        this.category = category;
        this.subcategory = subcategory;
        this.title = title;
        this.sellType = sellType;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.priceIsFixed = priceIsFixed;
        this.freeOfCharge = freeOfCharge;
        this.description = description;
        this.images = images;
        this.country = country;
        this.city = city;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.promotion = promotion;
        this.inactive = inactive;
        this.createdOn = createdOn;
    }

    public Ad(String adType, String category, String subcategory, String title, SellType sellType, double price, PriceCurrency priceCurrency, boolean priceIsFixed, boolean freeOfCharge, String description, List<Image> images, String country, City city, String contactName, String contactPhone, Promotion promotion, boolean inactive, Timestamp createdOn, Long id) {
        super(id);
        this.adType = adType;
        this.category = category;
        this.subcategory = subcategory;
        this.title = title;
        this.sellType = sellType;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.priceIsFixed = priceIsFixed;
        this.freeOfCharge = freeOfCharge;
        this.description = description;
        this.images = images;
        this.country = country;
        this.city = city;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.promotion = promotion;
        this.inactive = inactive;
        this.createdOn = createdOn;
    }

    public Ad(String adType, String category, String subcategory, String title, SellType sellType, double price, PriceCurrency priceCurrency, boolean priceIsFixed, boolean freeOfCharge, String description, List<Image> images, String country, City city, String contactName, String contactPhone, Promotion promotion, boolean inactive, Timestamp createdOn, String oid, long id) {
        super(oid, id);
        this.adType = adType;
        this.category = category;
        this.subcategory = subcategory;
        this.title = title;
        this.sellType = sellType;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.priceIsFixed = priceIsFixed;
        this.freeOfCharge = freeOfCharge;
        this.description = description;
        this.images = images;
        this.country = country;
        this.city = city;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.promotion = promotion;
        this.inactive = inactive;
        this.createdOn = createdOn;
    }

    public String getAdType() {
        return adType;
    }

    public void setAdType(String adType) {
        this.adType = adType;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public SellType getSellType() {
        return sellType;
    }

    public void setSellType(SellType sellType) {
        this.sellType = sellType;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public PriceCurrency getPriceCurrency() {
        return priceCurrency;
    }

    public void setPriceCurrency(PriceCurrency priceCurrency) {
        this.priceCurrency = priceCurrency;
    }

    public boolean isPriceIsFixed() {
        return priceIsFixed;
    }

    public void setPriceIsFixed(boolean priceIsFixed) {
        this.priceIsFixed = priceIsFixed;
    }

    public boolean isFreeOfCharge() {
        return freeOfCharge;
    }

    public void setFreeOfCharge(boolean freeOfCharge) {
        this.freeOfCharge = freeOfCharge;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
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
        return "Ad{" + "adType=" + adType + ", category=" + category + ", subcategory=" + subcategory + ", title=" + title + ", sellType=" + sellType + ", price=" + price + ", priceCurrency=" + priceCurrency + ", priceIsFixed=" + priceIsFixed + ", freeOfCharge=" + freeOfCharge + ", description=" + description + ", images=" + images + ", country=" + country + ", city=" + city + ", contactName=" + contactName + ", contactPhone=" + contactPhone + ", promotion=" + promotion + ", inactive=" + inactive + ", createdOn=" + createdOn + '}';
    }
}
