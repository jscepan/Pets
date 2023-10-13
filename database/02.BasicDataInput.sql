INSERT INTO roles(name) VALUES('ROLE_BACK_OFFICE');
INSERT INTO roles(name) VALUES('ROLE_COMPANY_ADMIN');
INSERT INTO roles(name) VALUES('ROLE_USER');

INSERT INTO countries(value) VALUES('serbia');

INSERT INTO cities(value, zip_code, country_id) VALUES('subotica', '24000', 1);
INSERT INTO cities(value, zip_code, country_id) VALUES('novi_sad', '21000', 1);
INSERT INTO cities(value, zip_code, country_id) VALUES('belgrade', '11000', 1);

ALTER TABLE `pets`.`ads` 
CHANGE COLUMN `description` `description` LONGTEXT NULL DEFAULT NULL ;
ALTER TABLE `pets`.`promotions` 
CHANGE COLUMN `services` `services` LONGTEXT NULL DEFAULT NULL ;

INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, points, created_on) VALUES('', 'basicAd','','free','maturityOf30Days', 0, 'rsd',1,0,0,now());
INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, points, created_on) VALUES('', 'priorityAd','','moreViews','maturityOf3Days||aboveBasicAds||basicAfterMaturity', 700, 'rsd',0,0,10,now());
INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, points, created_on) VALUES('', 'highPriorityAd','','onTop','maturityOf7Days||onFirstPages||basicAfterMaturity', 1500, 'rsd',0,0,30,now());

