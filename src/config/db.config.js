require('dotenv').config();

module.exports = {
  HOST: process.env.DEV_HOST,
  USER: process.env.DEV_USER,
  PASSWORD: process.env.DEV_PASSWORD,
  DB: process.env.DEV_DBNAME,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
