/* Replace with your SQL commands */

CREATE TABLE orders (
    id SERIAL PRIMARY  KEY,
    id_each_product  integer,
    quantity integer,
    user_id integer,
    status_of_order BOOLEAN
);
