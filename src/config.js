const dotenv = require('dotenv')

const assert = require('assert')

dotenv.config()

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} =process.env
const sqlEncrypt = process.env.SQL_ENCRIPT === "true"

module.exports = {
    port: PORT || 8080,
    host: HOST,
    url: HOST_URL,

    sql:{
server: SQL_SERVER,
database: SQL_DATABASE,
user: SQL_USER,
password: SQL_PASSWORD,

options:{
encrypt: sqlEncrypt,
enableArithAbort: true
}
    }
}





