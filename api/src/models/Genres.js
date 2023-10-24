const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genres', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true,
        timestamps: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{ timestamps: false });
}