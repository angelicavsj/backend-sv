const Sequalize = require('sequelize');

const db = require('../data/database')

const Products = db.define('products', {

    id: {
        type: Sequalize.INTEGER,
        unique:true,
        primaryKey: true,
        autoIncrement: true,
    },

    name : {
        type:Sequalize.CHAR,
        unique :  true,
        allowNull: true
    },

    description: {
        type: Sequalize.CHAR,
        allowNull: true
    },

    code: {
        type:Sequalize.INTEGER,
        unique :  true,
        allowNull: true

    },

    barCode: {
        type: Sequalize.INTEGER,
        unique :  true,
        allowNull: true
    },

    cost: {
        type: Sequalize.FLOAT,
        allowNull:true

    },

    netPrice: {
        type:Sequalize.FLOAT,
        allowNull: true

    },

    marginOfGain: {
        type:Sequalize.FLOAT,
        allowNull:true
    },

    IVA: {
        type: Sequalize.INTEGER,
        allowNull:true

    },

    finalPrice: {
        type:Sequalize.FLOAT,
        allowNull: true
    },

    imgProduct: {
        type: Sequalize.STRING,
        allowNull: true
    },

    initialInventory: {
        type:Sequalize.INTEGER,
        allowNull: true
    },

    storageType: {
        type: Sequalize.INTEGER,  

    },

    packaging: {
        type: Sequalize.STRING,
       
    },

    unit: {
        type: Sequalize.STRING

    },

    dueData: {
        type:Sequalize.DATE,
        allowNull: true
    },

    log: {
        type: Sequalize.FLOAT

    },

    weight: {
        type: Sequalize.FLOAT

    },

    high: {
        type:Sequalize.FLOAT

    },

    widht: {
        type:Sequalize.FLOAT

    },

    winery: {
        type:Sequalize.INTEGER,
        allowNull: true
    },

    locationInwinery: {
        type:Sequalize.FLOAT,
        allowNull: true

    },

    statusProduct:{
        type:Sequalize.INTEGER,
        allowNull: true
    },

   line:{
        type:Sequalize.STRING,
        allowNull: true
    },

    rotation:{
        type:Sequalize.STRING,
        allowNull: true
    },

})

module.exports= Products