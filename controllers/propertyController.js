let express =require("express");
let Property =require("../models").Property;

module.exports={
async getAllProperties(req,res){
 try {
     let propertyCollection= await Property.find({})
     res.status(201).json(propertyCollection)
   
 } catch(e){
     console.log(e)
     res.status(500).send(e)

 }

},
async createProperty (req,res){
    try {
        let propertyCollection=await Property.create({
            name:req.body.name,
            type:req.body.type,
            size:req.body.size,
            bedroomsNo:req.body.bedroomsNo,
            location:req.body.location,
            longitutude:req.body.longitude,
            latitude:req.body.latitude,
            city:req.body.city,
            isTaken:req.body.isTaken,
            price:req.body.price,
            description:req.body.description,
        
        })
        res.json(propertyCollection)


    }catch(e){
        console.log(e)
        res.status(400).send(e)

    }
},


async updateProperty(req, res) {
    try {
      let  propertyCollection = await Property.find({
        id: req.params.propertyId,
      })
      if (propertyCollection) {
        let  updateProperty = await Property.update({
            name:req.body.name,
            type:req.body.type,
            size:req.body.size,
            bedroomsNo:req.body.bedroomsNo,
            location:req.body.location,
            longitutude:req.body.longitude,
            latitude:req.body.latitude,
            city:req.body.city,
            isTaken:req.body.isTaken,
            price:req.body.price,
            description:req.body.description,
          

        })
        res.status(201).json(updateProperty)
      } else {
        res.status(404).send("Property  Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },



}