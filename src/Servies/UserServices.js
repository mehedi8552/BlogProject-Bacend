const UserModel = require("../Models/UserModel");
const { EncodeTocken } = require("../Utility/TokenHelper");

const UserOTPService = async (req) => {
  try {
    const { name,email, mobile, password } = req.body;
    let Code = Math.floor(100000+Math.random()*900000);
    const newUser = new UserModel({
        name: name,
        mobile: mobile,
        password: password,
        email: email,   
    });
    newUser.otp = Code;

    await newUser.save();
    return { status: "succes", message: "Your 6 Digit OTP is Send" };
  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};
const LoginService = async (req)=>{
  try{

  let email = req.params.email;
   let total = await UserModel.findOne({ email: email}).count("total");
   if (total === 1) {
     //read id
     let user_id = await UserModel.find({ email: email}).select("_id");
     //Token Generate
     let token = EncodeTocken(email, user_id[0]["_id"].toString());

     return { status: "success", message: "Login success", token: token };
   }else{
      return { status: "Faild", message: e.toString() };
    }
  }
  catch(e){
    return { status: "Faild", message: e.toString() };
  }
}


const VarifyOTPService = async (req) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;
    let total = await UserModel.find({ email: email, otp: otp }).count("total");

    if (total === 1) {
      //read id
      let user_id = await UserModel.find({ email: email, otp: otp }).select("_id");
      //Token Generate
      let token = EncodeTocken(email, user_id[0]["_id"].toString());
      //set otp 0
      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      return { status: "success", message: "Valid OTP", token: token };
    } else {
      return { status: "Faild", message: "Invalide OTP" };
    }
  } catch (e) {
    return { status: "Faild", message: "Invalide OTP" };
  }
};

module.exports = {
  UserOTPService,
  VarifyOTPService,
  LoginService,
  //SaveProfileService,
  //ReadProfileService
};
