module.exports=(sequelize,DataTypes)=>{
    const Invoice =sequelize.define('Invoice',{
    id:{
        primaryKey: true,
        type: DataTypes.UUID
                    },
    productName:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true

            },
    Amount:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
        required:true
            },
    Dueby:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
      },
    paymentMode:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
      }



    });
    return Invoice;
}