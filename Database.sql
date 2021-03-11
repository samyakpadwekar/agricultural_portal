CREATE USER 'agri'@'localhost' IDENTIFIED BY 'manager';

GRANT ALL PRIVILEGES ON project.* TO 'agri'@'localhost';

FLUSH PRIVILEGES;



INSERT INTO users values(default,'Pune','India','Jaladhara','Rajlaxmi Apartment',null,393002,'Gujarat','12345678912','HDFC05523','admin@gmail.com','Admin','admin','+917894561234','abc#1234','2018-12-13','ADMIN');

INSERT INTO sellers values(default,'Mumbai','India','landMark','line1',null,421116,'Maharashtra','12345678978','HDFC05323','Tata','seller1@gmail.com','seller1','jtiourij4556871','seller1','+917897561234','abc#1234','2019-01-15','ACTIVE');

INSERT INTO categories VALUES(default,'Machinery','Heavy duty agricultural machineries',null);

INSERT INTO products values(DEFAULT,null,'Tata',null,null,50000,'Tractor','Tractor',10,20,1,1);




INSERT INTO users values(default,'Pune','India','landMark1','line1','line1',111111,'Gujarat','111111111111','HDFC01111','customer1@gmail.com','Customer1','Customer1','+911111111111','cust#1111','2017-12-13','CUSTOMER');

INSERT INTO users values(default,'Pune','India','landMark2','line1','line2',222222,'Gujarat','222222222222','HDFC02222','customer2@gmail.com','Customer2','Customer2','+912222222222','cust#2222','2017-12-1','CUSTOMER');

INSERT INTO sellers values(default,'Pune','India','landMark1','line1','line1',111111,'Maharashtra','111111111111','HDFC01111','c1111','seller1@gmail.com','seller1','gstin11111111','seller1','+911111111111','abc#1111','2019-01-15','ACTIVE');

INSERT INTO sellers values(default,'Pune','India','landMark2','line2','line2',222222,'Maharashtra','222222222222','HDFC02222','c2222','seller2@gmail.com','seller2','gstin22222222','seller2','+912222222222','abc#2222','2019-01-11','ACTIVE');
