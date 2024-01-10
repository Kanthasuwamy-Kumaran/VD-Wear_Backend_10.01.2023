import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

//name
//email
//password
//role

const userSchema = mongoose.Schema ({
    name: {
    type: String,
    required: true
    },

    email: {
    type: String,
    required: true,
    unique: true
    },

    password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default:"User"
  },

}

,{
   timestamps:true

});


userSchema.pre('save',async function(next){
    if (!this.isModified('password')){
   next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password,salt)
});

userSchema.methods.matchPassword= async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password) 
};

const User = mongoose.model('User', userSchema);
export default User;
