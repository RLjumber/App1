const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON data in request body

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to database at ${process.env.DB_HOST}:${process.env.DB_PORT}`);
  }
});

const seedData = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Jane',
    age: 25,
  },
];

// seedData.forEach((data) => {
//   pool.query('INSERT INTO users (name, age) VALUES ($1, $2)', [data.name, data.age], (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(`Inserted data for ${data.name}`);
//     }
//   });
// });

// Close the database connection after seeding
pool.end();


// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
