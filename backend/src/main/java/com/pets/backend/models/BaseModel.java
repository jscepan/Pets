package com.pets.backend.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Transient;

@MappedSuperclass
public abstract class BaseModel {

    @Transient
    private String oid;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public BaseModel() {
        this.oid = null;
    }

    public BaseModel(Long id) {
        this.id = id;
        generateOid();
    }

    public BaseModel(String oid, long id) {
        this.oid = oid;
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
        generateOid();
    }

    public String getOid() {
        if (this.oid == null) {
            generateOid();
        }
        return oid;
    }

    public void setOid(String oid) {
        this.oid = oid;
    }

    public void generateOid() {
        if (this.id != null) {
            this.oid = this.getClass().getSimpleName().toLowerCase() + "::" + this.id;
        }
    }

    public static Long getIdFromOid(String oid) {
        if (oid == null || oid.isEmpty()) {
            return null;
        }
        String[] oids = oid.split("::");
        return Long.valueOf(oids[1]);
    }

    @Override
    public String toString() {
        return "BaseModel{" + "oid=" + oid + '}';
    }
}
