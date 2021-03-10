CREATE USER 'agri'@'localhost' IDENTIFIED BY 'manager';

GRANT ALL PRIVILEGES ON project.* TO 'agri'@'localhost';

FLUSH PRIVILEGES;

INSERT INTO users VALUES(default,null,admin@gmail.com,'Admin',null,'admin','+917894561230','abc#1234','2018-12-01','ADMIN',0);
