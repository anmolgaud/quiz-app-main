require('dotenv').config();

const config = {
    serverPort: process.env.PORT,
    dbConfig: {
        pgHost: process.env.PG_HOST,
        pgPort: process.env.PG_PORT,
        pgUser: process.env.PG_USER,
        pgDatabase: process.env.PG_DATABASE,
        pgPassword: process.env.PG_PASSWORD,
    },
}

module.exports = config;