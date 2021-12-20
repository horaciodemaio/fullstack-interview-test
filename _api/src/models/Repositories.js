const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('repositories', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status:{
        type: DataTypes.ENUM(["open", "closed", "merged"]),
        allowNull:false,
    }
  });
  
};