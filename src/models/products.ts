
import { DataTypes } from 'sequelize'
import db from '../data/database'


const Products = db.define('products', {

    id: {
        type: DataTypes.INTEGER

    },

    nameProducts: {
        type: DataTypes.STRING

    },


    description: {
        type: DataTypes.INTEGER

    },

    code: {
        type: DataTypes.INTEGER

    },

    barCode: {
        type: DataTypes.INTEGER

    },

    cost: {
        type: DataTypes.FLOAT

    },

    netPrice: {
        type: DataTypes.FLOAT

    },

    marginOfGain: {
        type: DataTypes.FLOAT

    },

    IVA: {
        type: DataTypes.INTEGER

    },

    finalPrice: {
        type: DataTypes.FLOAT

    },

    imgProduct: {
        type: DataTypes.STRING

    },

    initialInventory: {
        type: DataTypes.INTEGER

    },

    storageType: {
        type: DataTypes.INTEGER

    },

    packaging: {
        type: DataTypes.STRING

    },

    unit: {
        type: DataTypes.STRING

    },

    dueData: {
        type: DataTypes.DATE

    },

    log: {
        type: DataTypes.FLOAT

    },

    weight: {
        type: DataTypes.FLOAT

    },

    high: {
        type: DataTypes.FLOAT

    },

    widht: {
        type: DataTypes.FLOAT

    },

    winery: {
        type: DataTypes.INTEGER

    },

    locationInwinery: {
        type: DataTypes.FLOAT

    },

    statusProduct:{
        type: DataTypes.INTEGER
    },


})

export default Products