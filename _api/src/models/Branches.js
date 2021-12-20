const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('branches', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  
};