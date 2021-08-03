var bcrypt = require("bcrypt");

module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        id:{
            primaryKey: true,
            type: DataTypes.UUID
            },
        
           
           email:{
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
        
        instanceMethods: {
            validPassword: function(password) {
                return bcrypt.compareSync(password, this.pwd);
            }
        },
        hooks: {
            beforeCreate: function(Owner, options, ) {
                Owner.password = bcrypt.hashSync(
                    Owner.password,
                    bcrypt.genSaltSync(10),
                    // @ts-ignore
                    null
                );
            }
        }
    },
    {
        freezeTableName:true,
        timestamps:false
        
    })
    
    return User;
}
