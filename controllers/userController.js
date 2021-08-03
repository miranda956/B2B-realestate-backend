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
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            gender:req.body.gender,
            contact:req.body.contact,
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
              id: req.body.email,
              firstName: req.body.firstName,
              lastName:req.body.lastName,
              email: req.body.email,
              gender:req.body.gender,
              contact:req.body.contact,

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