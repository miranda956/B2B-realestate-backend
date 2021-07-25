module.exports=(sequelize,DataTypes)=>{
    const Assignment = sequelize.define('assigment',{
        id:{
            primaryKey: true,
            type: DataTypes.UUID
                    },
                    
    });
    
    return Assignment;
}