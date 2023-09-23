package com.pets.backend.models;

public class SearchFilter {

    private String quickSearch;

    public SearchFilter() {
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
}
