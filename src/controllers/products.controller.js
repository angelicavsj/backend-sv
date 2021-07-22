const Products = require ('../models/products.js')

const getProduts = async  ( req, res, next) => {
    
try {
    
const products = await Products.findAll()

res.status(201).json({products})

} catch (error) {
    console.log(error)
 next()   
}

}

const getByIdProducts =async (req, res, next) => {

try {
    const {id} =req.params

    const product = await Products.findByPk(id)

    res.status(2001).json({product})

} catch (error) {
    console.log(error)
    next() 
}
}

const createProducts =async (req, res, next) => {
    const { body } = req

try {
    const product = new Products(body)
    await product.save()

    res.status(201).json({mesage: 'se agrego nuevo producto'}, )  

} catch (error) {
    console.log(error)
    res.status(500).json({msg:'error de servidor'})
    next()
}
}
 


 const updateProducts =async (req, res) => {
try {
    
} catch (error) {
    console.log(error)
    next()
}
}

const deleteProducts =async (req, res) => {
try {
    
} catch (error) {
    console.log(error)
    next()
}
}

module.exports={
getByIdProducts,
getProduts,
createProducts,
updateProducts,
deleteProducts
}

