module.exports=(sequelize,DataTypes)=>{
    const Roles =sequelize.define('Roles',{
id:{
     primaryKey: true,
     type: DataTypes.UUID
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
      },
      

    });
    return Roles;
}