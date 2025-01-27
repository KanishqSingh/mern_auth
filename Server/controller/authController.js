import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async(req,res) =>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.json({success:false,message:"Missing Details"})
    }

    try {

        const hashedPassword = await bcrypt.hash()

        
    } catch (error) {
        res.json({success:false,message: error.message })
        
    }
}