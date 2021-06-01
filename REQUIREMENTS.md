# StoreFront Backend

This is a second Udacity Nano degree project in order to understand PostgreSQL in Node.   

# API Requirements

- Create an online storefront so users need to be able to browse an index of all products,
- Specifics of a single product, and add products to an order that they can view in a cart page. 
- building the API that will support this application

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Order
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Order by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Order
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## License

This project is authorized MIT License
