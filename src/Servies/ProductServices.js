
const ProductModel = require('../Models/ProductModel');
const { DecodeTocken } = require('../Utility/TokenHelper');
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const SliderListService= async ()=>{
    try{
        let data = await ProductSliderModel.find();
        return {status: "success",data:data}
  }
  catch(err){
    return{status:"failed",data:err}.toString()
  }
}

const ListByKeywordService= async (req)=>{
    try{
      const searchTerm = req.params.keyword;
      const searchResults = await ProductModel.find({
        $or: [
            { title: { $regex: searchTerm, $options: 'i' } }, // Search by title
            { Description: { $regex: searchTerm, $options: 'i' } }, // Search by description
            { remark: { $regex: searchTerm, $options: 'i' } }
          ]
    });
  return {status:"success", data:searchResults}
    }
  catch (e) {
    return {status:"fail", data:e.toString()}
  }
  }
  //SearchByRemark
  const ProducListByRemarkService= async (req)=>{
    try{
      const searchRemark = req.params.remark;
      const searchResults = await ProductModel.find({
        remark: { $regex: searchRemark, $options: 'i' } // Search by remark
    });

      return {status:"success", data:searchResults}
    }
  catch (e) {
    return {status:"fail", data:e.toString()}
  }
  }
// Create Product
  const SaveProductService = async (req)=>{
    try{
      
     const user_id = req.cookies['token'];
     let id = DecodeTocken(user_id);
     let userID = new ObjectId(id.user_id)
     const reqbodyWithUserID = {
      ...req.body,
      userID: userID
  };
    let data = await ProductModel.create(reqbodyWithUserID);
     return {status:"success",message:data}
    }
     catch (e) {
         return {status:"fail", message:e.toString()}
     }
 }
 // Update Product
 const UpdateProductService = async (req) => {
  try {
    const productId = new ObjectId(req.params.ProductId); 
    const body = req.body;

    // Update query
    let data = await ProductModel.updateOne({ _id: productId }, { $set: body });

    if (data.nModified === 0) {
    
      return { status: "success", message: "Product not found or no changes were made" };
    }

    return { status: "success", message: "Product updated successfully", data: data };
  } catch (e) {
    return { status: "fail", message: e.toString() };
  }
};
 //Read
 const ReadProductService = async (req)=>{
   let result = await ProductModel.find()
   return {status:"success",data:result}
 }


 const LatestProductService = async (req)=>{
  const latestPosts = await ProductModel.find().sort({ createdAt: -1 }).limit(6);
  return {status:"success",data:latestPosts}
}
 const DeleteProductService = async (req)=>{
  try{
    const productId = req.params.ProductId;
    await ProductModel.deleteOne({_id:productId});
    return {status:"success",message:"Product Delete success"}
  }
  catch(e){
    return {status:"success",message:e.toString()}
  }
}
module.exports = {
    SliderListService,
    ListByKeywordService,
    SaveProductService,
    ReadProductService,
    UpdateProductService,
    DeleteProductService,
    ProducListByRemarkService,
    LatestProductService
}