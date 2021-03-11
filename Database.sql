CREATE USER 'agri'@'localhost' IDENTIFIED BY 'manager';

GRANT ALL PRIVILEGES ON project.* TO 'agri'@'localhost';

FLUSH PRIVILEGES;


INSERT INTO users values(default,'Pune','India','Jaladhara','Rajlaxmi Apartment',null,393002,'Gujarat','12345678912','HDFC05523','admin@gmail.com','Admin','admin','+917894561234','abc#1234','2018-12-13','ADMIN');

INSERT INTO sellers values(default,'Mumbai','India','landMark','line1',null,421116,'Maharashtra','12345678978','HDFC05323','Tata','seller1@gmail.com','seller1','jtiourij4556871','seller1','+917897561234','abc#1234','2019-01-15','ACTIVE');

INSERT INTO categories VALUES(default,'Machinery','Heavy duty agricultural machineries',null);

INSERT INTO products values(DEFAULT,null,'Tata',null,null,50000,'Tractor','Tractor',10,20,1,1);

