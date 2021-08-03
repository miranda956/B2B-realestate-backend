let express =require("express");
let Agent =require("../models").Agent;

module.exports={
    async getAllAgents(req,res){

     try {

        let AgentCollection=await Agent.find({})
        res.json(AgentCollection)
     }catch (e){
         console.log(e)
         res.status(500).send(e)
     }
    },

    async getAllAgentsClients(req,res){
        try{
            let AgentCollection =await Agent.find({
            
            })

        }catch(e){

        }

    }
}