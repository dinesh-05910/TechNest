import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all Products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find();
    res.status(200).json(products);
});


// @desc Fetch a Product
// @route GET /api/products/:id
// @access Public

const getProductsById = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        return res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Resource not found');
    }
});

// @desc Create a Product
// @route POST /api/products
// @access Private/Admin

const createProduct = asyncHandler(async(req,res) => {
    const product = await Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    })

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});


export {getProducts, getProductsById, createProduct};