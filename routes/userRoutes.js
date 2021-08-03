// @ts-nocheck
let  userController = require("../controllers").userController;

module.exports=app=>{

    app.get("/api/users", userController.getAllUsers)
    app.post("/api/user/create", userController.create)
    app.put("/api/user/:userId", userController.update)
  

}
