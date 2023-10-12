package com.pets.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "avatars")
public class Avatar extends BaseModel {

    @Column(name = "name")
    private String name;

    @Size(max = 40)
    @Enumerated(EnumType.STRING)
    @Column(name = "imageServer")
    private Image.ImageServer imageServer;

    public Avatar() {
    }

    public Avatar(String name, Image.ImageServer imageServer) {
        this.name = name;
        this.imageServer = imageServer;
    }

    public Avatar(String name, Image.ImageServer imageServer, Long id) {
        super(id);
        this.name = name;
        this.imageServer = imageServer;
    }

    public Avatar(String name, Image.ImageServer imageServer, String oid, long id) {
        super(oid, id);
        this.name = name;
        this.imageServer = imageServer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Image.ImageServer getImageServer() {
        return imageServer;
    }

    public void setImageServer(Image.ImageServer imageServer) {
        this.imageServer = imageServer;
    }
}
