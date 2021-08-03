// @ts-nocheck
let AgentController =require('../controllers').AgentController;

module.exports=app=>{
    app.get("/api/agents",AgentController.getAllAgents)
    app.get("/api/agents/clients",AgentController.getAllAgentsClients)
    app.get("/api/agents/properties",AgentController.getAllAgentsProperties)
    app.get("/api/agents/clients/:id",AgentController.getAllClientsByAgentId)
    app.get("/api/agents/properties/:id",AgentController.getPropertyByAgentId)

    
}

