
module.exports=(sequelize,DataTypes)=>{
    const Client = sequelize.define('Client',{

id:{
 primaryKey: true,
 type: DataTypes.UUID
         },

    firstName:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},
lastName:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},
gender:{
    type:DataTypes.ENUM('Female', 'male'),
    allowNull:false,
    required:true
},
contact:{
    type:DataTypes.STRING,
 allowNull:false,
 required:true
}


    })
    Client.associate=(models)=>{
        Client.belongsToMany(models.Property,{
            through:"Lease"

        });
        Client.belongsTo(models.Agent,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Client
}