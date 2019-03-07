// TOP 2 VARIABLES ADDED FOR POSTGRESS
const localPgConnection = {
  host: "localhost",
  database: "hobbits",
  user: "student",
  password: "password"
};
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/hobbits.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  //ADDED FOR POSTGRESS
  production: {
    client: "pg",
    connection: prodDbConnection, //an object or a string
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
