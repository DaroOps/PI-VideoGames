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
      type: DataTypes.DATE,
      allowNull:false,
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: true
    }

  },{ timestamps: false });
};
