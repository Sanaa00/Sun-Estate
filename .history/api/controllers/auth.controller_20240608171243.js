import bcrypt from "bcrypt"

export const register = async(req, res) => {
     const { username, email, password } = req.body;


     const hashedPassword = await bcrypt.hash(password, 10)
     
     const newUser=await prisma.user.create
}
export const login = (req, res) => {
     
}
export const logout = (req, res) => {
     
}