// @ts-nocheck
let express =require("express");
let Agent =require("../models").Agent;
let Client =require('../models').clientModel;

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
            let AgentCollection =await Client.findAll({ include:Agent})
            res.json(AgentCollection)

        }catch(e){
            console.log(e)
            res.status(500).send(e)

        }

    },
    async getAllAgentsProperties(req,res){
        try{
            let AgentCollection = await Agent.findAll({include:Property})
            res.json(AgentCollection)

        } catch(e){
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getAllPropertyByAgentId(req,res){
        try {
              let AgentCollection =await Agent.findAll({
                  include:Property,
                  where:{
                      id:req.params.AgentId
                  }
            })
            res.json(AgentCollection)
        }catch(e){
            console.log(e)
            res.status(400).send(e)

        }
    },
    async getAllClientsByAgentId(req,res){
        try{
            let AgentCollection =await Agent.findAll({
                include:Client,
                where:{
                    id:req.params.AgentId
                }
            })
            res.json(AgentCollection)
        } catch(e){
            console.log(e)
            res.status(400).send(e)
        }

    }
}