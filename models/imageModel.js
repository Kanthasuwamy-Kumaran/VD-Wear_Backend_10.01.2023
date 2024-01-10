
// //product models

// // const mongoose = require('mongoose');
// import mongoose from "mongoose";
// // const {ObjectId} = mongoose.Schema;

// const productSchema = new mongoose.Schema({

//     title: {
//        type: String
//    },

//    description: {
//        type: String
//    },

//    price: {
//        type: Number,
//    },

//    imageURL: String,
// //    image: {
// //        public_id: {
// //            type: String,
        
// //        },
// //        url: {
// //            type: String,
// //        }
   
//    });

// //const {Schema, model} = require('mongoose')         const Photo = new Schema({title:String, description:String, imageURL: String,public_id:String});   module.exports = model('Photo' , Photo);


// const Product = mongoose.model("Product", productSchema);
// export default Product;




// Upload.js
// import { Schema, model } from "mongoose";

// const UploadSchema = new Schema({
//   fileName: {
//     type: String,
//     required: true,
//   },
//   file: {
//     data: Buffer,
//     contentType: String,
//   },
//   uploadTime: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default Upload = model("upload", UploadSchema);


import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: {type: String},
    public_id:{type: String}
});
const Image = mongoose.model('Image', imageSchema);
export default Image;