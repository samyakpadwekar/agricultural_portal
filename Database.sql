CREATE USER 'agri'@'localhost' IDENTIFIED BY 'manager';

GRANT ALL PRIVILEGES ON project.* TO 'agri'@'localhost';

FLUSH PRIVILEGES;



INSERT INTO users values(default,'Pune','India','Jaladhara','Rajlaxmi Apartment',null,393002,'Gujarat','12345678912','HDFC05523','admin@gmail.com','Admin','admin','+917894561234','abc#1234','2018-12-13','ADMIN');
INSERT INTO users values(default,'Pune','India','landMark1','line1','line1',111111,'Gujarat','111111111111','HDFC01111','customer1@gmail.com','Customer1','Customer1','+911111111111','cust#1111','2017-12-13','CUSTOMER');
INSERT INTO users values(default,'Pune','India','landMark2','line1','line2',222222,'Gujarat','222222222222','HDFC02222','customer2@gmail.com','Customer2','Customer2','+912222222222','cust#2222','2017-12-1','CUSTOMER');

INSERT INTO sellers values(default,'Mumbai','India','landMark','line1',null,421116,'Maharashtra','12345678978','HDFC05323','Tata','seller1@gmail.com','seller1','jtiourij4556871','seller1','+917897561234','abc#1234','2019-01-15','ACTIVE');
INSERT INTO sellers values(default,'Pune','India','landMark2','line1','line2',222222,'Maharashtra','222222222222','HDFC02222','c2222','seller1@gmail.com','seller1','gstin22222222','seller1','+912222222222','abc#1111','2019-01-11','ACTIVE');
INSERT INTO sellers values(default,'Thane','India','landMark','line1',null,421118,'Maharashtra','12345848978','HDFC05327','shop1','seller2@gmail.com','seller2','jtiourij4556871','seller2','+917897512234','abc#1234','2019-01-15','ACTIVE');
INSERT INTO sellers values(default,'Nagpur','India','landMark','line1',null,421121,'Maharashtra','12344578978','HDFC0554','shop2','seller3@gmail.com','seller3','jtiourij4556881','seller3','+917897545234','abc#1234','2019-03-25','ACTIVE');
INSERT INTO sellers values(default,'Pune','India','landMark','line1',null,421127,'Maharashtra','12345678548','HDFC05376','shop3','seller4@gmail.com','seller14','jtiourij45568791','seller4','+917897568934','abc#1234','2019-02-19','ACTIVE');

INSERT INTO categories VALUES(default,'Machinery','Heavy duty agricultural machineries',null);
INSERT INTO categories VALUES(default,'Pesticides','pestisides',null);
INSERT INTO categories VALUES(default,'Crops','Wheat,rice,sugarcane etc',null);

insert into product_catalogue values(default, 'Sugarcane');
insert into product_catalogue values(default, 'Rice');
insert into product_catalogue values(default, 'Wheat');
insert into product_catalogue values(default, 'Tractor');
insert into product_catalogue values(default, 'Pesticide');

INSERT INTO products values(DEFAULT,null,'Tata',null,null,900000,'Tractor descp',10,20,1,4,1);
INSERT INTO products values(DEFAULT,null,'Tata',null,null,50000,'Tractor descp',10,20,1,4,1);
INSERT INTO products values(DEFAULT,null,'Tata',null,null,50000,'Tractor descp',10,20,1,4,2);
INSERT INTO products values(DEFAULT,null,'Mahindra',null,null,50000,'Tractor descp',10,20,1,4,3);
INSERT INTO products values(DEFAULT,null,'HMT',null,null,450,'Rice descp',10,20,3,2,4);
INSERT INTO products values(DEFAULT,null,'Agro-Chemical',null,null,5000,'highly poisonous',10,20,2,5,1);
INSERT INTO products values(DEFAULT,null,'Wheat',null,null,500,'Organic product',10,20,3,3,5);
INSERT INTO products values(DEFAULT,null,'Ganna',null,null,500,'Fibrous and healthy',10,20,3,1,4);

INSERT INTO wishlist value (DEFAULT,NULL,1,3);
INSERT INTO wishlist value (DEFAULT,NULL,2,4);

INSERT INTO cart value (DEFAULT,'2020-03-10',2,1,1);
INSERT INTO cart value (DEFAULT,'2020-03-10',3,2,4);
INSERT INTO cart value (DEFAULT,'2020-03-10',4,3,5);




