const error_handler = (error, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: "Error 500",
        response: error
    })
}
export default error_handler