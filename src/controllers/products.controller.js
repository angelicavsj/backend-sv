const Products = require ('../models/products.js')

// get all products
const getProduts = async  ( req, res, next) => { 
try {   
const products = await Products.findAll()
res.status(201).json({products})

} catch (error) {
    console.log(error)
    next()   
}
}

//get product per id
const getByIdProducts = async (req, res, next) => {
try {
    const {Id} =req.params
    const product = await Products.findByPk(Id)
    res.status(2001).json({product})

} catch (error) {
    console.log(error)
    next() 
}
}

// create product
const createProducts = async (req, res, next) => {
    const { body } = req
console.log(req.body);
try {
//method create product
    const product = new Products(body)
    await product.save()
    res.status(201).json({mesage:'producto agregado con exito'},)  

} catch (error) {
    console.log(error)
    res.status(500).json({msg:'error de servidor'})
    next()
}
}
 //updateProducts
const updateProducts = async (req, res) => {
try {
    
} catch (error) {
    console.log(error)
    next()
}
}

const deleteProducts = async (req, res) => {
try {
    
} catch (error) {
    console.log(error)
    next()
}
}

module.exports = {
getByIdProducts,
getProduts,
createProducts,
updateProducts,
deleteProducts
}

