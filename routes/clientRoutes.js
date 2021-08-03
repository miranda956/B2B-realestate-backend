// @ts-nocheck
let clientController =require("../controllers").clientMController;

module.exports=app=>{
    app.get("/api/clients",clientController.getAllclients)
    app.get("/api/client/:id",clientController.getAllClientsById)
    app.get("/api/client/leases/:id",clientController.getAllClientLeases)
    app.create("/api/client",clientController.createClient)
    app.update("api/client/:id",clientController.updateClient)

    

}
