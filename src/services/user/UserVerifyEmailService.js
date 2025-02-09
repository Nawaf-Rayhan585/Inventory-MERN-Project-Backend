const OTPSModel = require("../../models/Users/OTPSModel.js");
const SendEmailUtility = require("../../utility/SendEmailUtility");

const UserVerifyEmailService= async (Request, DataModel) => {
    try {
        // Email Account Query
        let email = Request.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000)

        // Database First process
        let UserCount = (await DataModel.aggregate([{$match: {email: email}}, {$count: "total"}]))

        console.log(UserCount)

        if(UserCount.length>0){
            // OTP Insert

            // Database Second process
            await OTPSModel.create({email: email, otp: OTPCode})

            // Email Send
            let SendEmail = await SendEmailUtility(email,`<h1 style='color:#ff9079;text-align:center;'>Your OTP Code Is: ${OTPCode}</h1>`, "Inventory PIN Verification")

            return {status: "success", data: SendEmail}
        }
        else{
            return {status: "fail", data: "No User Found"}
        }
    }catch (error) {

        return {status: "fail", data: error.toString()}
    }
}
module.exports=UserVerifyEmailService