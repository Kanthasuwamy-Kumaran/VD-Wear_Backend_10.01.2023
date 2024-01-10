import mongoose from "mongoose";

// onwername 
// onweraddress
// onwerphonenumber
// onweremail
// shopname
// shopaddress
// shopphone number
// shopwebsite URL

const shopSchema = mongoose.Schema ({
    onwername: {
    type: String,
    required: true
    },

    onweraddress: {
    type: String,
    required: true
    
    },

    onwerphonenumber: {
    type: String,
    required: true
  },

    onweremail: {
    type: String,
    required: true,
    unique: true
    
    },

    shopname: {
    type: String,
    required: true
    },

    shopaddress: {
    type: String,
    required: true
    
    },

    shopphonenumber: {
    type: String,
    required: true
  },

   shopwebsiteURL: {
    type: String 
  }
  
}

,{
   timestamps:true

});

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;
