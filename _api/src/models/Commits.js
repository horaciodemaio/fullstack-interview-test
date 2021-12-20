const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('commits', {
      
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    files: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
  });
  
};