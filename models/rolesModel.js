module.exports=(sequelize,DataTypes)=>{
    const Roles =sequelize.define('Roles',{
id:{
     primaryKey: true,
     type: DataTypes.UUID
      },
      name:{
        type:DataTypes.ENUM('Admin','Agent'),
        allowNull:false,
        required:true
      },
      

    });
    Roles.associate=(models)=>{
      Roles.hasOne(models.User,{
        foreignkey:{
          allowNull:false
        }
      })
    }

    return Roles;
} 