DROP TABLE sleds;
DROP TABLE owner_users;
DROP TABLE rental_users;

CREATE TABLE rental_users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password TEXT
);

CREATE TABLE owner_users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password TEXT
);

CREATE TABLE sleds(
    sled_id SERIAL PRIMARY KEY,
    sled_name VARCHAR(50),
    sled_picture TEXT,
    sled_description TEXT,
    sled_rules TEXT,
    sled_cost INT,
    user_id INT REFERENCES owner_users(user_id)
);