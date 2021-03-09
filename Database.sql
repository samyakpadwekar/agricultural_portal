CREATE USER 'agri'@'localhost' IDENTIFIED BY 'manager';

GRANT ALL PRIVILEGES ON project.* TO 'agri'@'localhost';

FLUSH PRIVILEGES;