import Employee from '../../models/Employee.js';

let allEmployees = async (req, res, next) => {
    try{
        let all = await Employee.find();
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let employeesByName = async (req, res, next) => {
    try{
        let nameQuery = req.params.name;
        let all = await Employee.find({name: nameQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let employeesByPost = async (req, res, next) => {
    try{
        let postQuery = req.params.post;
        let all = await Employee.find({post: postQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let employeesBySalary = async (req, res, next) => {
    try{
        let salaryQuery = req.params.salary;
        let all = await Employee.find({salary: salaryQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

export {allEmployees, employeesByName, employeesByPost, employeesBySalary};