const jwt =require('jsonwebtoken')
const user = require('../models/user')

const auth = async (req , res, next)=>{

    const token = req.cookies.token
    if(!token) return res.status(401).send("no access")

        try{
            const verify =jwt.verify(token,process.env.JWT_SECRET)
            req.user = await user.findById(verify.id).select('-password')
            next()
        }
         catch (err) {
    res.status(400).send('Invalid token.');
  }

}

module.exports = auth;