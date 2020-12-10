const pool = require("./config/connection")



const create_table = `CREATE TABLE Shoes (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	type VARCHAR ( 50 ) NOT NULL,
	minSize INT NOT NULL,
	maxSize INT NOT NULL,
    status VARCHAR ( 50 ) NOT NULL
);`

 pool.query(create_table, () => {
     
 })