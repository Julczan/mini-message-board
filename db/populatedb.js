#! /usr/bin/env node

const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (message, username) 
VALUES ('Hello everyone!', 'Julek');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
