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

INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, points, created_on) VALUES('', 'basicAd','','free','maturityOf30Days', 0, 'RSD',1,0,0,now());
INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, points, created_on) VALUES('', 'priorityAd','','moreViews','maturityOf3Days||aboveBasicAds||basicAfterMaturity', 700, 'RSD',0,0,10,now());
INSERT INTO promotions(type, title, subtitle, description, services, price, price_currency, free_of_charge, inactive, points, created_on) VALUES('', 'highPriorityAd','','onTop','maturityOf7Days||onFirstPages||basicAfterMaturity', 1500, 'RSD',0,0,30,now());




INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/001.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/002.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/003.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/004.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/005.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/006.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/007.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/008.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/009.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/010.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/011.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/012.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/013.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/014.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/015.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/016.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/017.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/018.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/019.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/020.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/021.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/022.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/023.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/024.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/025.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/026.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/027.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/028.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/029.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/030.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/031.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/032.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/033.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/034.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/035.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/036.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/037.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/038.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/039.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/040.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/041.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/042.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/043.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/044.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/045.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/046.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/047.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/048.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/049.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/050.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/051.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/052.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/053.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/054.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/055.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/056.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/057.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/058.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/059.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/060.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/061.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/062.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/063.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/064.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/065.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/066.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/067.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/068.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/069.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/070.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/071.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/072.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/073.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/074.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/075.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/076.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/077.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/078.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/079.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/080.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/081.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/082.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/083.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/084.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/085.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/086.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/087.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/088.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/089.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/090.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/091.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/092.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/093.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/094.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/095.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/096.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/097.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/098.jpg');
INSERT INTO images(description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'images_dogs/099.jpg');

INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-1.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-2.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-3.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-4.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-5.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-6.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-7.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-8.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-9.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-10.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-11.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-12.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-13.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-14.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-15.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-16.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-17.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-18.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-19.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-20.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-21.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-22.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-23.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-24.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-25.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-26.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-27.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-28.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-29.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-30.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-31.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-32.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-33.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-34.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-35.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-36.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-37.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-38.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-39.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-40.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-41.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-42.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-43.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-44.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-45.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-46.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-47.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-48.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-49.jpg');
INSERT INTO images (description,image_server,index_of_image,name) VALUES('','MAIN_FILE_SYSTEM', 0, 'image-50.jpg');

INSERT INTO ads (ad_status, ad_type, category, contact_name, contact_phone, created_on, description, free_of_charge, price, price_currency, price_is_fixed, ad_sell_type, subcategory, title, city_id, promotion_id, user_id) VALUES('ACTIVE', 'pets','dogs',Marko Petrović381611234567(DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY))Akita: Na prodaju prelepi štenci akite, jedne od najodanijih rasa pasa. Ovi štenci su pravi mali krzneni čupavci i već su pokazali svoju nežnost prema ljudima. Akite su poznate po svom hrabrom i časnom karakteru, čineći ih idealnim izborom za porodice koje traže odanog člana porodice.0FLOOR(100 + RAND() * (10000 - 100 + 1))RSD0SELL""Prelep štenac akite traži novi dom""FLOOR(1 + RAND() * (3 - 1 + 1))
FLOOR(1 + RAND() * (3 - 1 + 1))FLOOR(1 + RAND() * (3 - 1 + 1)));