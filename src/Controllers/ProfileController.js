
const {
    BloggerProfileService,
    BloggerProfileByIdService,
    BloggerPostByIDService,
    BloggerAllPostByService,
    RemoveBloggerByIDService
}  = require('../Servies/ProfileServices')



exports.BloggerProfile = async (req,res)=>{
    let result = await BloggerProfileService(req);
    return res.status(200).json(result);
}
exports.BloggerProfileById = async (req,res)=>{
    let result = await BloggerProfileByIdService(req);
    return res.status(200).json(result);
}
exports.BloggerPostByID = async (req,res)=>{
    let result = await BloggerPostByIDService(req);
    return res.status(200).json(result);
}
exports.BloggerAllPost = async (req,res)=>{
    let result = await BloggerAllPostByService(req);
    return res.status(200).json(result);
}

exports.RemoveBloggerByID = async (req,res)=>{
    let result = await RemoveBloggerByIDService(req);
    return res.status(200).json(result);
}