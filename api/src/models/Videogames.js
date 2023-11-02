const {DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogames', {
    
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    releasedate: {
      type: DataTypes.DATEONLY,
      allowNull:false,
    },
    rating:{
      type: DataTypes.STRING,
      allowNull: true
    }

  },{ timestamps: false });
};
