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

    @Column(name = "active")
    private boolean active;

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

    public Ad(long id, String title, String description, boolean active) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.active = active;
        this.createdOn = new Timestamp(System.currentTimeMillis());
    }

    public Ad(String title, String description) {
        this.title = title;
        this.description = description;
        this.active = true;
        this.createdOn = new Timestamp(System.currentTimeMillis());
    }

    public Ad(String title, String description, boolean active) {
        this.title = title;
        this.description = description;
        this.active = active;
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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

}
