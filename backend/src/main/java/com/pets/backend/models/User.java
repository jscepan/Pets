package com.pets.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.sql.Timestamp;

@Entity
@Table(name = "users",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "username"),
            @UniqueConstraint(columnNames = "email")
        })
public class User extends BaseModel {

    @NotBlank
    @Size(max = 20)
    private String username;

    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    @JsonIgnore
    private String password;

    @Size(max = 120)
    private String displayName;

    @ManyToOne()
    private City city;

    @Size(max = 50)
    private String phoneNumber;

    private boolean inactive;

    @Size(max = 150)
    private String fullName;

    @Size(max = 40)
    private String language;

    @ManyToOne()
    private Avatar avatar;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_terms_and_conditions",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "terms_and_conditions_id"))
    private Set<TermsAndConditions> termsAndConditions = new HashSet<>();

    @Column(name = "createdOn")
    private Timestamp createdOn;

    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String username, String email, String password, String displayName, City city, String phoneNumber, boolean inactive, String fullName, String language, Avatar avatar, Timestamp createdOn) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.inactive = inactive;
        this.fullName = fullName;
        this.language = language;
        this.avatar = avatar;
        this.createdOn = createdOn;
    }

    public User(String username, String email, String password, String displayName, City city, String phoneNumber, boolean inactive, String fullName, String language, Avatar avatar, Timestamp createdOn, Long id) {
        super(id);
        this.username = username;
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.inactive = inactive;
        this.fullName = fullName;
        this.language = language;
        this.avatar = avatar;
        this.createdOn = createdOn;
    }

    public User(String username, String email, String password, String displayName, City city, String phoneNumber, boolean inactive, String fullName, String language, Avatar avatar, Timestamp createdOn, String oid, long id) {
        super(oid, id);
        this.username = username;
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.inactive = inactive;
        this.fullName = fullName;
        this.language = language;
        this.avatar = avatar;
        this.createdOn = createdOn;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean isInactive() {
        return inactive;
    }

    public void setInactive(boolean inactive) {
        this.inactive = inactive;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Avatar getAvatar() {
        return avatar;
    }

    public void setAvatar(Avatar avatar) {
        this.avatar = avatar;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Set<TermsAndConditions> getTermsAndConditions() {
        return termsAndConditions;
    }

    public void setTermsAndConditions(Set<TermsAndConditions> termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }
}
