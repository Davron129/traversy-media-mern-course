create database db_name;

-- connect to db
\c db_name; 

create TABLE user(id SERIAL PRIMARY KEY, name VARCHAR(255), surname VARCHAR(255));



create table goal (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(511),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)