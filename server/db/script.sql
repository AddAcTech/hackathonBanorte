CREATE DATABASE Login;

USE Login;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL
);