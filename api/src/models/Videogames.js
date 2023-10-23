const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogames', {
    
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDv4,
      allowNull: false,
      primaryKey:true ,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plataforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    releasedate: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    }

  },{ timestamps: false });
};
