// http://vitaly-t.github.io/pg-promise/module-pg-promise.html
const pgp = require("pg-promise")();

require("dotenv").config();

const {
  DATABASE_URL,
  PG_HOST,
  PG_PORT,
  PG_DATABASE,
  PG_USER,
  PG_PASSWORD,
  SECRETKEY,
} = process.env;
const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
      password: PG_PASSWORD,
      secret: SECRETKEY,
    };

const db = pgp(cn);

module.exports = db;
