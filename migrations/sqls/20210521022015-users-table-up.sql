/* Replace with your SQL commands */

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password_digest VARCHAR
);

CREATE USER store_user WITH PASSWORD 'password123';

GRANT ALL PRIVILEGES ON DATABASE store_front TO store_front_user;
