INSERT INTO roles(name) VALUES('ROLE_BACK_OFFICE');
INSERT INTO roles(name) VALUES('ROLE_COMPANY_ADMIN');
INSERT INTO roles(name) VALUES('ROLE_USER');

INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, created_on) VALUES('tip_neki_tamo', 'Standardna vidljivost','','Objavite vas oglas potpuno besplatno','Objava oglasa u trajanju od 30 dana', 0, 'RSD',1,0,now());