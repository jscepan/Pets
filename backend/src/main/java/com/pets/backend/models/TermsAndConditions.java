package com.pets.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "terms_and_conditions")
public class TermsAndConditions extends BaseModel {

    private String title;
    @Column(name = "createdOn")
    private Timestamp createdOn;
    private boolean inactive;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "terms_and_conditions_roles",
            joinColumns = @JoinColumn(name = "terms_and_conditions_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public TermsAndConditions() {
    }

    public TermsAndConditions(String title, Timestamp createdOn, boolean inactive) {
        this.title = title;
        this.createdOn = createdOn;
        this.inactive = inactive;
    }

    public TermsAndConditions(String title, Timestamp createdOn, boolean inactive, Long id) {
        super(id);
        this.title = title;
        this.createdOn = createdOn;
        this.inactive = inactive;
    }

    public TermsAndConditions(String title, Timestamp createdOn, boolean inactive, String oid, long id) {
        super(oid, id);
        this.title = title;
        this.createdOn = createdOn;
        this.inactive = inactive;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

    public boolean isInactive() {
        return inactive;
    }

    public void setInactive(boolean inactive) {
        this.inactive = inactive;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
