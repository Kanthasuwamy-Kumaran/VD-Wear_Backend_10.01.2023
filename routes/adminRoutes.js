import express from 'express';
const router = express. Router();

import { 
    loginAdmin,
    logoutAdmin,
    getShopDetails,
    getAllUsers,
    deleteShop,
    deleteUser
} from '../Controllers/adminController.js';

import { protect,isAdmin } from '../middleware/authMiddleware.js';



// ("/api/admin",adminRoutes) this main routes

// admin routes
router.post("/admin-login",loginAdmin);
router.post('/adminlogout', logoutAdmin); 
router.get("/shopsprofile",protect,isAdmin,getShopDetails); 
router.get("/usersprofile",protect,isAdmin,getAllUsers);

router.delete("/deleteshop",protect,isAdmin,deleteShop);
router.delete("/deleteuser",protect,isAdmin,deleteUser);


// start upload image
import {uploadImage} from "../Controllers/imageController.js"
import multer from 'multer';

const storage= multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadImage);





export default router;