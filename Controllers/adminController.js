// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv'
import asynchandler from'express-async-handler'
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'
import Shop from '../models/shopModel.js'

// dotenv.config();

// des Auth user/set token
// route POST /api/users/admin-login
// access admin
const loginAdmin = asynchandler(async (req, res) => {
    const {email,password}=req.body
    const user = await User.findOne({email});
    if (user.role !== "admin") throw new Error("Not Authorised");
    if (user && (await user.matchPassword(password))){
  generateToken(res,user.id)
  res.status(201).json({
     message:"Hello Admin : Welcome to Admin page"
  })
}
else{
  res.status(401)
  throw new Error('Invaild id or password')
}
   });


// @desc logout user/set token
// route POST /api/admin-logout
// @access User
const logoutAdmin = asynchandler(async(req, res) => {

  res.cookie('jwt','',{
      httpOnly:true,
      expires: new Date(0),
  })
  res.status (200).json ({ message: 'Admin Logout out' });
  });
   

// @desc get allgetShopDetails
// route GET /api/shopprofile
// access admin
  const getShopDetails = asynchandler(async(req,res)=>{
      const shop=await Shop.find({});
      res.json(shop);
  })


// @desc get all usersprofile
// route GET /api/usersprofile
// access admin
const getAllUsers = asynchandler(async(req,res)=>{
  const user=await User.find({});
  res.json(user);
})    


//delete shop by admin in shoponwer email
const deleteShop = asynchandler(async (req, res) => {
    const { onweremail }  = req.body;
    const shop= await Shop.findOne({onweremail})
        try {
         const deleteShop = await Shop.findByIdAndDelete(shop._id);
            res.json(deleteShop);
        } catch (error) {
        throw new Error(error);
    }
    }); 
    

//  // delete users by admin in email
    const deleteUser = asynchandler(async (req, res) => {
    const { email }  = req.body;
    const user= await User.findOne({email})
    try {
      const deleteUser = await User.findByIdAndDelete(user._id);
      res.json(deleteUser);
    } catch (error) {
      throw new Error(error);
    }
  });


  export {

    loginAdmin,
    logoutAdmin,
    getShopDetails,
    getAllUsers,
    deleteShop,
    deleteUser
    
};