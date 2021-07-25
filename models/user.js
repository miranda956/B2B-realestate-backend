var bcrypt = require("bcrypt");

module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
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
           type:DataTypes.STRING,
           allowNull:false,
           required:true
           },
           contact:{
               type:DataTypes.STRING,
               allowNull:false,
               required:true
           },
           isAdmin:{
               type:DataTypes.STRING,
               allowNull:false,
               required:true,
               default:false
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