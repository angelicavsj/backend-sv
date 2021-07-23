const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('pruebaSv', 'prueba-sv', '12345678Sv',{
  dialect:'mssql',
  host:'prueba-vs.database.windows.net',
})
    
//test connection
const test = async() => {
try {
    await sequelize.authenticate()
    console.log('successful connection')
} catch (error) {
    console.log('Failed connection')
}
}
test()

module.exports = sequelize;