import jwt from "jsonwebtoken"

const adminAuth=async (req,res,next)=>{
    try {
        const {token}=req.headers
        if(!token){
            return res.json({succes:false,message:"not authorizedd"})
        }
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        if(token_decode!=process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({succes:false,message:"not authorizedd"})

        }
        next()

    } catch (error) {
            res.json({succes:false,message:"ADMIN LOGIN ERROR FROM ADMINAUTH"})
    }
}

export default adminAuth