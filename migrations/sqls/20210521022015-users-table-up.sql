/* Replace with your SQL commands */

CREATE TABLE users (
    id SERIAL PRIMARY KEY
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    password VARCHAR
);

CREATE USER store_user WITH PASSWORD 'password123';

GRANT ALL PRIVILEGES ON DATABASE store_front TO store_front_user;

