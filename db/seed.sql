DROP TABLE users;
DROP TABLE sleds;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(50)
);

CREATE TABLE sleds(
    sled_id SERIAL PRIMARY KEY,
    sled_name VARCHAR(50),
    sled_picture TEXT,
    sled_description TEXT,
    sled_rules TEXT,
    sled_cost INT,
    user_id INT REFERENCES users(user_id)
);