import express from 'express';
const router = express. Router();

import { 
        registerUser,
        loginUser,
        logoutUser,
        getUserProfile,
        updateUserProfile,
        registerShop,
} 
from '../Controllers/userController.js';
import { protect,isAdmin } from '../middleware/authMiddleware.js';

// ("/api/users",userRoutes) this main routes

//user routes
router.post('/register', registerUser); //userRegister
router.post('/login', loginUser);       //userLogin
router.post('/logout', logoutUser);    //userLogout
router.route('/profile').get(protect,getUserProfile) //user get profile and update
.put(protect,updateUserProfile);   

// router.route('/profile').get(protect,getUserProfile)
// .delete(protect,deleteUser);

// //shop routes
router.post('/shopregister', registerShop);

export default router;