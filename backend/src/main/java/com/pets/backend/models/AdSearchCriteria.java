package com.pets.backend.models;

import java.util.List;

public class AdSearchCriteria {

    private List<City> cities;
    private double priceFrom;
    private double priceTo;
    private List<Ad.SellType> sellTypes;
    private List<String> adTypes;
    private List<String> categories;
    private List<String> subcategories;
    private List<Ad.AdStatus> adstatuses;
    private boolean priceIsFixed;
    private boolean freeOfCharge;
    private List<User> users;

    public AdSearchCriteria() {
    }

    public AdSearchCriteria(List<City> cities, double priceFrom, double priceTo, List<Ad.SellType> sellTypes, List<String> adTypes, List<String> categories, List<String> subcategories, List<Ad.AdStatus> adstatuses, boolean priceIsFixed, boolean freeOfCharge, List<User> users) {
        this.cities = cities;
        this.priceFrom = priceFrom;
        this.priceTo = priceTo;
        this.sellTypes = sellTypes;
        this.adTypes = adTypes;
        this.categories = categories;
        this.subcategories = subcategories;
        this.adstatuses = adstatuses;
        this.priceIsFixed = priceIsFixed;
        this.freeOfCharge = freeOfCharge;
        this.users = users;
    }

    public List<City> getCities() {
        return cities;
    }

    public void setCities(List<City> cities) {
        this.cities = cities;
    }

    public double getPriceFrom() {
        return priceFrom;
    }

    public void setPriceFrom(double priceFrom) {
        this.priceFrom = priceFrom;
    }

    public double getPriceTo() {
        return priceTo;
    }

    public void setPriceTo(double priceTo) {
        this.priceTo = priceTo;
    }

    public List<Ad.SellType> getSellTypes() {
        return sellTypes;
    }

    public void setSellTypes(List<Ad.SellType> sellTypes) {
        this.sellTypes = sellTypes;
    }

    public List<String> getAdTypes() {
        return adTypes;
    }

    public void setAdTypes(List<String> adTypes) {
        this.adTypes = adTypes;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public List<String> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(List<String> subcategories) {
        this.subcategories = subcategories;
    }

    public List<Ad.AdStatus> getAdstatuses() {
        return adstatuses;
    }

    public void setAdstatuses(List<Ad.AdStatus> adstatuses) {
        this.adstatuses = adstatuses;
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

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
