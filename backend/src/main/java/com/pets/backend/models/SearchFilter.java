package com.pets.backend.models;

public class SearchFilter {

    private String quickSearch;
    private AdPage adPage;
    private AdSearchCriteria adSearchCriteria;

    public SearchFilter() {
    }

    public SearchFilter(String quickSearch, AdPage adPage, AdSearchCriteria adSearchCriteria) {
        this.quickSearch = quickSearch;
        this.adPage = adPage;
        this.adSearchCriteria = adSearchCriteria;
    }

    public SearchFilter(String quickSearch) {
        this.quickSearch = quickSearch;
    }

    public String getQuickSearch() {
        return quickSearch;
    }

    public void setQuickSearch(String quickSearch) {
        this.quickSearch = quickSearch;
    }

    public AdPage getAdPage() {
        return adPage;
    }

    public void setAdPage(AdPage adPage) {
        this.adPage = adPage;
    }

    public AdSearchCriteria getAdSearchCriteria() {
        return adSearchCriteria;
    }

    public void setAdSearchCriteria(AdSearchCriteria adSearchCriteria) {
        this.adSearchCriteria = adSearchCriteria;
    }
}
