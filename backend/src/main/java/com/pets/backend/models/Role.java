package com.pets.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role extends BaseModel {

    @Enumerated(EnumType.STRING)
    @Column(length = 40)
    private ERole name;

    public Role() {
    }

    public Role(ERole name) {
        this.name = name;
    }

    public Role(ERole name, Long id) {
        super(id);
        this.name = name;
    }

    public Role(ERole name, String oid, long id) {
        super(oid, id);
        this.name = name;
    }

    public ERole getName() {
        return name;
    }

    public void setName(ERole name) {
        this.name = name;
    }
}
