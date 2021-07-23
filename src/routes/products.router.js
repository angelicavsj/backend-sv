
const Router = require('express')
const router = Router()
const productsController = require('../controllers/products.controller')


router.get('/products',          productsController.getProduts )
router.get('/products/:id',      productsController.getByIdProducts )
router.post('/products/create',  productsController.createProducts )
router.put('/:id',               productsController.updateProducts )
router.put('/:id',               productsController.deleteProducts )


module.exports= router