const express=require ('express');
const FuncToReset =require('./FuncToReset');
//This file contains only routes for reset password.As they are more than one routes so express uses .
//Router is  a group of routes for a specific path prefix.

const Resetrouter = express.Router();
//token generation and mail send
Resetrouter.route("/").post(FuncToReset.sendMailforReset);
//verifying token and reset password
Resetrouter.route("/:token").get(FuncToReset.GetToken);
Resetrouter.route("/newpassword").post(FuncToReset.UpdatePassword);

module.exports = Resetrouter;