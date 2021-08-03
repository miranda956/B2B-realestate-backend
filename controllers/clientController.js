// @ts-nocheck
let express =require("express");
let Client =require("../models").ClientModel;
let Leases =require("../models").LeasesModel;

module.exports={
  async getAllClients(req,res){
      try {
            let clientCollection=await Client.find({})
            res.json(clientCollection)
      }catch(e){
          console.log(e)
          res.status(500).send(e)

      }
  },
  async getAllClientsById(req,res){
      try {
            let clientCollection =await Client.findAll({
                where:{
                    id:req.params.ClientId
                }
            })
            res.json(clientCollection)
      }catch(e){
          console.log(e)
          res.status(500).send(e)


      }
  },
  async createClient(req,res){
    
    try {

      let ClientCollection =await Client.create({
          firstName:req.body.firstName,
          lastName:req.body.lastName,
          email:req.body.email,
          gender:req.body.gender,
          contact:req.body.contact
      })
      res.json(ClientCollection)

    }catch(e){
        console.log(e)
        res.status(400).send(e)

    }
  },


  async updateClient(req,res){
      try{
          let clientCollection =await Client.find({
              id:req.params.AgentId,
          })
          if(clientCollection){
              let updateClient= await Client.update({
                  firstName:req.body.firstName,
                  lastName:req.body.lastName,
                  email:req.body.email,
                  gender:req.body.gender,
                  contact:req.body.contact
              })
              res.status(201).send(updateClient)
          }
          else{
              res.status(404).send("User not found")
          }

      } catch(e){
          console.log(e)
          res.status(500).send(e)

      }
  },
  async getAllClientLeases(req,res){
      try {
           let clientCollection =await Leases.getAllClientLeases.find({
               include:[Property,Client],
               where:{
                   id:req.params.ClientId
               }
           })
           res.json(clientCollection)
      }catch(e){
          console.log(e)
          res.status(404).send(e)
      }
  },

  

  async clientPay(req,res){
      try{
          // payment for bookings 

      }catch(e){
          console.log(e)
          res.status(404).send(e)
      }
  }




}