package com.pets.backend.models;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "ads")
public class Ad {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "isActive")
    private boolean isActive;

    @Column(name = "createdOn")
    private Timestamp createdOn;

    public Ad() {
    }

    public Ad(long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdOn = new Timestamp(System.currentTimeMillis());
    }

    public Ad(long id, String title, String description, boolean isActive) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isActive = isActive;
        this.createdOn = new Timestamp(System.currentTimeMillis());
    }

    public Ad(String title, String description) {
        this.title = title;
        this.description = description;
        this.isActive = true;
        this.createdOn = new Timestamp(System.currentTimeMillis());
    }

    public Ad(String title, String description, boolean isActive) {
        this.title = title;
        this.description = description;
        this.isActive = isActive;
        this.createdOn = new Timestamp(System.currentTimeMillis());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

}
