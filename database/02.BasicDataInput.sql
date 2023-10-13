INSERT INTO roles(name) VALUES('ROLE_BACK_OFFICE');
INSERT INTO roles(name) VALUES('ROLE_COMPANY_ADMIN');
INSERT INTO roles(name) VALUES('ROLE_USER');

INSERT INTO countries(value) VALUES('serbia');

INSERT INTO cities(value, zip_code, country_id) VALUES('subotica', '24000', 1);
INSERT INTO cities(value, zip_code, country_id) VALUES('novi_sad', '21000', 1);
INSERT INTO cities(value, zip_code, country_id) VALUES('belgrade', '11000', 1);

ALTER TABLE `pets`.`ads` 
CHANGE COLUMN `description` `description` LONGTEXT NULL DEFAULT NULL ;

INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, points, created_on) VALUES('tip_neki_tamo', 'standardVisibility','someSubtitleOfPromotion','Description - objavite vas oglas potpuno besplatno','Objava oglasa u trajanju od 30 dana', 0, 'rsd',1,0,0,now());

