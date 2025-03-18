import Shop from '../../models/Shop.js';

let allShops = async (req, res, next) => {
    try{
        let all = await Shop.find();
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let shopsByName = async (req, res, next) => {
    try{
        let nameQuery = req.params.name;
        let all = await Shop.find({name: nameQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let shopsByAddress = async (req, res, next) => {
    try{
        let addressQuery = req.params.address;
        let all = await Shop.find({address: addressQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

export {allShops, shopsByName, shopsByAddress};