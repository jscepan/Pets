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

    @Enumerated(EnumType.STRING)
    @Column(name = "adSellType")
    private SellType sellType;

    @Column(name = "price")
    private double price;

    @Enumerated(EnumType.STRING)
    @Column(name = "priceCurrency")
    private Currency priceCurrency;

    @Column(name = "priceIsFixed")
    private boolean priceIsFixed;

    @Column(name = "freeOfCharge")
    private boolean freeOfCharge;

    @Column(name = "description")
    private String description;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "ad_images",
            joinColumns = @JoinColumn(name = "ad_id"),
            inverseJoinColumns = @JoinColumn(name = "image_id"))
    private List<Image> images;
    @ManyToOne()
    private City city;

    @Column(name = "contactName")
    private String contactName;

    @Column(name = "contactPhone")
    private String contactPhone;

    @ManyToOne()
    private Promotion promotion;

    @Column(name = "createdOn")
    private Timestamp createdOn;

    @Enumerated(EnumType.STRING)
    @Column(name = "adStatus")
    private AdStatus adStatus;

    public Ad() {
    }

    public Ad(String adType, String category, String subcategory, String title, SellType sellType, double price, Currency priceCurrency, boolean priceIsFixed, boolean freeOfCharge, String description, List<Image> images, City city, String contactName, String contactPhone, Promotion promotion, Timestamp createdOn, AdStatus adStatus) {
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
        this.city = city;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.promotion = promotion;
        this.createdOn = createdOn;
        this.adStatus = adStatus;
    }

    public Ad(String adType, String category, String subcategory, String title, SellType sellType, double price, Currency priceCurrency, boolean priceIsFixed, boolean freeOfCharge, String description, List<Image> images, City city, String contactName, String contactPhone, Promotion promotion, Timestamp createdOn, AdStatus adStatus, Long id) {
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
        this.city = city;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.promotion = promotion;
        this.createdOn = createdOn;
        this.adStatus = adStatus;
    }

    public Ad(String adType, String category, String subcategory, String title, SellType sellType, double price, Currency priceCurrency, boolean priceIsFixed, boolean freeOfCharge, String description, List<Image> images, City city, String contactName, String contactPhone, Promotion promotion, Timestamp createdOn, AdStatus adStatus, String oid, long id) {
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
        this.city = city;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.promotion = promotion;
        this.createdOn = createdOn;
        this.adStatus = adStatus;
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

    public Currency getPriceCurrency() {
        return priceCurrency;
    }

    public void setPriceCurrency(Currency priceCurrency) {
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

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

    public AdStatus getAdStatus() {
        return adStatus;
    }

    public void setAdStatus(AdStatus adStatus) {
        this.adStatus = adStatus;
    }

    public enum AdStatus {
        ACTIVE, PAUSED, INACTIVE
    }

    public enum Currency {
        RSD, EUR
    }

    public enum SellType {
        BUY, SELL
    }
}
