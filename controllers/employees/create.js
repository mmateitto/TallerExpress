import Employee from '../../models/Employee.js';

let create = async (req, res, next) => {
    try {
        let employeesInfo = req.body

        let createEmployee = await Employee.create(employeesInfo)

        return res.status(201).json({
            response: createEmployee
        })
    }catch(error){
        next(error)
    }
}

export default create