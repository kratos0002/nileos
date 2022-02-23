import jwt from 'jsonwebtoken'

export const generateToken = (user) =>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET|| 'goku', {
        expiresIn: '30d',
    })
}


export const isAuth = (req, res, next) =>{
    const authorization = req.headers.authorization
    if(authorization){
        const token = authorization.slice(7, authorization.length)
        // console.log("token is", token)
        jwt.verify(
            token, process.env.JWT_SECRET||'somethingsecret',
        (err,decode)=>{
            if(err){
                res.status(401).send({message: 'invalid'})
                console.log('vishal')
            }else{
                req.user = decode
                console.log(req.user)
                next()
            }
        })
    }else{
        res.status(401).send({message: 'no token'})
    }
}