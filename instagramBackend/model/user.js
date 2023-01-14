import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
email:{
    type : String,
    required : [true],
},
password:{
    type : String,
    required : [true],
},
name:{
    type : String,
    required : [true],
}
});

// UserSchema.path("lastname").validate((lastname) => {
//   return !/[0-9]/.test(lastname);
// }, "Neren dund too tsohij ywna hahah");

// UserSchema.path("firstname").validate((firstname) => {
//   return !/[0-9]/.test(firstname);
// }, "first name-d too oroh ysgui");

//email validate nemeh

const User = mongoose.model("User", UserSchema);

export default User;