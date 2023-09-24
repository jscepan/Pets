package com.pets.backend.models;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "ads")
public class Ad extends BaseModel {

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

    public Ad(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public Ad(String title, String description, boolean active, Timestamp createdOn) {
        this.title = title;
        this.description = description;
        this.active = active;
        this.createdOn = createdOn;
    }

    public Ad(String title, String description, boolean active, Timestamp createdOn, Long id) {
        super(id);
        this.title = title;
        this.description = description;
        this.active = active;
        this.createdOn = createdOn;
    }

    public Ad(String title, String description, boolean active, Timestamp createdOn, String oid, long id) {
        super(oid, id);
        this.title = title;
        this.description = description;
        this.active = active;
        this.createdOn = createdOn;
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
