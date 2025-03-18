import Product from '../../models/Product.js';

let allProducts = async (req, res, next) => {
    try{
        let all = await Product.find();
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let productsByName = async (req, res, next) => {
    try{
        let nameQuery = req.params.name;
        let all = await Product.find({name: nameQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let productsByModel = async (req, res, next) => {
    try{
        let modelQuery = req.params.model;
        let all = await Product.find({model: modelQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let productsByType = async (req, res, next) => {
    try{
        let typeQuery = req.params.type;
        let all = await Product.find({type: typeQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let productsByPrice = async (req, res, next) => {
    try{
        let priceQuery = req.params.price;
        let all = await Product.find({price: priceQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let productsByInStock = async (req, res, next) => {
    try{
        let stockQuery = req.params.inStock;
        let all = await Product.find({inStock: stockQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

export {allProducts, productsByName, productsByModel, productsByType, productsByPrice, productsByInStock};