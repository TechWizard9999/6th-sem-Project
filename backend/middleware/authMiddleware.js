import jwt from 'jsonwebtoken';

const authenticateUser=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    // console.log(token);
    if(!token){
        return res.status(401).json({message: 'Unauthorized',success: false});
    }
    try {
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(401).json({msg: 'Unauthorized',success: false});
    }
}

export default authenticateUser;
// module.exports = authenticateUser;