let express= require('express');
let User =require('../models').User;

module.exports={

    async getAllUsers(req, res) {
        try {
          const userCollection = await User.find({})
          res.status(201).json(userCollection)
        } catch (e) {
          console.log(e)
          res.status(500).send(e)
        }
      },


      async createUser(req, res) {
        try {
          const userCollection = await User.create({
            
            email: req.body.email,
            password:req.body.password
          })
          res.status(201).send(userCollection)
        } catch (e) {
          console.log(e)
          res.status(400).send(e)
        }
      },

      async updateUser(req, res) {
        try {
          const userCollection = await User.find({
            id: req.params.userId,
          })
          if (userCollection) {
            const updatedUser = await User.update({
              
              email: req.body.email,

            })
            res.status(201).send(updatedUser)
          } else {
            res.status(404).send("User Not Found")
          }
        } catch (e) {
          console.log(e)
          res.status(500).send(e)
        }
      },


















}