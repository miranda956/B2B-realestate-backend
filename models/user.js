module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('User',{

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
           required:true,
           
     },
     contact:{

           type:DataTypes.STRING,
           allowNull:false,
           required:true
     },
     password:{
           type:DataTypes.STRING,
           allowNull:false,
           required:true
     }



    },
    {
         freezeTableName:true,
        timestamps:false

        
    });
    return User
}