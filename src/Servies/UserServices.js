const UserModel = require("../Models/UserModel");
const { EncodeTocken } = require("../Utility/TokenHelper");

//UserSignUpService
const UserSignUpService = async (req) => {
  try {
    const { name, email, mobile, password } = req.body;
    const newUser = new UserModel({
      name: name,
      mobile: mobile,
      password: password,
      email: email,
    });
    await newUser.save();
    return { status: "succes", message: "Registration Success"};
  } catch (e) {
    return { status: "Faild", message: e.toString(), };
  }
};
const LoginService = async (req) => {
  try {
    let { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      if (user.password == password) {
        console.log("Login Success");
                        //read id 
        let user_id = await UserModel.find({email:email,password:password}).select('_id');
       //Token Generate 
       console.log(user_id);
         let token = EncodeTocken(email,user_id[0]['_id'].toString())
        return { status: "success", message: "User Login Success",token:token,user_id:user_id};
      }else{
        console.log("Password Incorrect");
        return { status: "success", message: "Password Incorrect" }; 
      }
    }else{
      console.log("User does not exist");
      return { status: "error", message: "User does not exist" };
    }

  } catch (e) {
    return { status: "Faild", message: e.toString() };
  }
};

module.exports = {
  UserSignUpService,
  LoginService,
  //SaveProfileService,
  //ReadProfileService
};
