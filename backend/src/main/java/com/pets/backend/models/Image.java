package com.pets.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "images")
public class Image extends BaseModel {

    @NotBlank
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @NotBlank
    @Column(name = "index")
    private int index;

    @Size(max = 40)
    @Enumerated(EnumType.STRING)
    @Column(name = "imageServer")
    private ImageServer imageServer;

    public Image() {
    }

    public Image(String name, String description, int index, ImageServer imageServer) {
        this.name = name;
        this.description = description;
        this.index = index;
        this.imageServer = imageServer;
    }

    public Image(String name, String description, int index, ImageServer imageServer, Long id) {
        super(id);
        this.name = name;
        this.description = description;
        this.index = index;
        this.imageServer = imageServer;
    }

    public Image(String name, String description, int index, ImageServer imageServer, String oid, long id) {
        super(oid, id);
        this.name = name;
        this.description = description;
        this.index = index;
        this.imageServer = imageServer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public ImageServer getImageServer() {
        return imageServer;
    }

    public void setImageServer(ImageServer imageServer) {
        this.imageServer = imageServer;
    }

    public enum ImageServer {
        SERVER_MAIN
    }
}
