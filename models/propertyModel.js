// @ts-nocheck
module.exports=(sequelize,DataTypes)=>{
const Property =sequelize.define('Property',{
     id:{
          primaryKey: true,
          type: DataTypes.UUID
          },
name:{
    type:DataTypes.STRING,
     allowNull:false,
     required:true
},
type:{
 type:DataTypes.STRING,
 allowNull:false,
 required:true
},
size:{

 type:DataTypes.STRING,
 allowNull:false,
 required:true
},
bedroomsNo:{
 type:DataTypes.STRING,
 allowNull:false,
 required:true
},
location:{
 type:DataTypes.STRING,
 allowNull:false,
 required:true
},
longitude:{
 type:DataTypes.STRING,
 allowNull:false,
 required:true

},
latitude:{
 type:DataTypes.STRING,
 allowNull:false,
 required:true
},
city:{
 type:DataTypes.STRING,
 allowNull:false,
 required:true
},
isTaken:{
     type:DataTypes.BOOLEAN,
     allowNull:false,
     required:true,
     default:false
},
price:{
     type:DataTypes.DECIMAL(10,2),
     allowNull:false,
     required:true
},
description:{
     type:DataTypes.STRING,
     allowNull:false,
     required:true
}
},

 {
        freezeTableName:true,
        timestamps:false
    })
    Property.associate=(models)=>{
         Property.belongsToMany(models.Client,{
              through:"Lease"
         });
    }

    return Property;
}
