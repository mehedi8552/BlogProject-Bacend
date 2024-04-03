
const {
    SliderListService,
    ListByKeywordService,
    SaveProductService,
    ReadProductService,
    UpdateProductService,
    DeleteProductService,
    ProducListByRemarkService,
    LatestProductService
}  = require('../Servies/ProductServices')



exports.ProducSliderList = async (req,res)=>{
    let result = await SliderListService();
    return res.status(200).json(result);
}
exports.ProducListByKeyword = async (req,res)=>{
    let result = await ListByKeywordService(req);
    return res.status(200).json(result);
}
exports.ProducListByRemark = async (req,res)=>{
    let result = await ProducListByRemarkService(req);
    return res.status(200).json(result);
}
exports.CreateProduct = async (req,res)=>{
    let result = await SaveProductService(req);
    res.status(200).json(result);
}
exports.UpdateProduct = async (req,res)=>{
    let result = await UpdateProductService(req);
    res.status(200).json(result);
}
exports.ReadProduct = async (req,res)=>{
    let result = await ReadProductService(req);
    res.status(200).json(result);
}
exports.LatestProduct = async (req,res)=>{
    let result = await LatestProductService(req);
    res.status(200).json(result);
}
exports.DeleteProduct = async (req,res)=>{
    let result = await DeleteProductService(req);
    res.status(200).json(result);
}