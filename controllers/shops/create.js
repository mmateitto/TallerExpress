import Shop from '../../models/Shop.js';

let create = async (req, res, next) => {
    try {
        let shopInfo = req.body

        let createShop = await Shop.create(shopInfo)

        return res.status(201).json({
            response: createShop
        })
    }catch(error){
        next(error)
    }
}

let createMany = async (req, res, next) => {
    try {
        let shopsInfo = req.body

        let createShops = await Shop.create(shopsInfo)

        return res.status(201).json({
            response: createShops
        })
    }catch(error){
        next(error)
    }
}

export {create, createMany};