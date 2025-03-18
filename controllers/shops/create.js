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

export default create