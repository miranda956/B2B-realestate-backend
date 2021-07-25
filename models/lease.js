
module.exports=(sequelize,DataTypes)=>{
    const Lease =sequelize.define('Lease',{
        id:{
            primaryKey: true,
            type: DataTypes.UUID
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false,
                required:true

            },
            startDate:{
                type:DataTypes.DATE,
                allowNull:false,
                required:true
      
      
            },
            endDate:{
                type:DataTypes.DATE,
                allowNull:false,
                required:true
      
            },
            paymentType:{
                type:DataTypes.STRING,
                allowNull:false,
                required:true
            }

    });
    return Lease;
}