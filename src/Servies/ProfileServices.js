const ProductModel = require('../Models/ProductModel');
const ProfileModel = require('../Models/UserModel');

const BloggerProfileService = async ()=>{
    try{
        let data = await ProfileModel.find();
        return {status: "success",data:data}
  }
  catch(err){
    return{status:"failed",data:err}.toString()
  }
}

const BloggerProfileByIdService= async (req)=>{
    try{
        userID = req.params.id;
        let data = await ProfileModel.findById(userID);
        return {status: "success",data:data}
  }
  catch(err){
    return{status:"failed",data:err}.toString()
  }
}
const BloggerPostByIDService= async (req)=>{
  try{
      PostID = req.params.id;
      let data = await ProductModel.findById(PostID);
      return {status: "success",data:data}
}
catch(err){
  return{status:"failed",data:err}.toString()
}
}

const BloggerAllPostByService= async (req)=>{
  try{
      let data = await ProductModel.find();
      return {status: "success",data:data}
}
catch(err){
  return{status:"failed",data:err.toString()}
}
}

const RemoveBloggerByIDService= async (req)=>{
  try{
    let userId = req.params.id
      await ProfileModel.deleteOne({_id:userId});
      return {status: "success",data:"User Delete Success"}
}
catch(err){
  return{status:"failed",data:err.toString()}
}
}


module.exports = {
    BloggerProfileService,
    BloggerProfileByIdService,
    BloggerPostByIDService,
    BloggerAllPostByService,
    RemoveBloggerByIDService
}