module.exports=(sequelize,DataTypes)=>{
    const Agent= sequelize.define('Agent',{
 id:{
    primaryKey: true,
    type: DataTypes.UUID
    },

 name:{
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
    Agent.associate=(models)=>{
        Agent.hasMany(models.Property,{
            foreignkey:{
                allowNull:false
            }
  
        })
        



    }
    
    return Agent;
}