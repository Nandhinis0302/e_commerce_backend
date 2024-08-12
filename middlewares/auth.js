const jwt =require('jsonwebtoken')

const auth =(req,res,next)=>{
    const token = req.header('Authorization').split(" ")[1];//it have bearer code to get only token so split is used

    if(!token){
        return res.status(401).json({error:"No token,authorization denied"});
    }
    try{
        const decoded =jwt.verify(token,"secret_token");//token is decoded to get the (jwt.sign value)
        req.user = decoded;
        next();//to go next middleware 
    }catch(err){
        console.log('Token error:', err); 
        return res.status(401).json({err:"token is not valid"});
    }
};
module.exports = auth;
