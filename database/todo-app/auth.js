const jwt = require('jsonwebtoken')
const JWT_SECRET = 'HJW_WUNFI'

const auth = (req, res, next) => {
    const token = req.headers.authorization 
    if(token){
        const user = jwt.verify(token, JWT_SECRET)
        if(user){
            req.id = user.id
            next()
        }else{
            return res.json({
                message: "unauthorized"
            })
        }
        
    }else{

        return res.json({
            message: "unauthorized"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}