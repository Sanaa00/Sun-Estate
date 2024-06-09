import bcrypt from "bcrypt";

import prisma from "../lib/prisma.js";
export const register = async(req, res) => {
     const { username, email, password } = req.body;

     try {
          const hashedPassword = await bcrypt.hash(password, 10)
     
          const newUser = await prisma.user.create({
               data: {
                    username, password: hashedPassword, email
               }
          })


          console.log(newUser)

          res.status(201).json({ message: "user created successufully" })
     } catch (err) {
          console.log(err);
            res.status(500).json({ message: err.message })
     }
}
export const login = async (req, res) => {
   const  {username,email,password}=req.body
     try {

          const user = await prisma.user.findUnique({
               where:{username}
          })

          if (!user) return res.status(401).json({message:"invaild credentials"})
          
     } catch (err) {
          
     }
}
export const logout = (req, res) => {
     
}