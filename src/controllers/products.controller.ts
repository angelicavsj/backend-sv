import { resolve } from "dns/promises";

import Products from "../models/products";


const getProduts = async  ( req, res, next) => {
    
try {
    
const products = await Products.findAll()

req.requestTime = Date.now();

res.status(2001).json(products)

} catch (error) {
    
}
next()
}

export const CreateProducts =async (req, res) => {


}

module.exports