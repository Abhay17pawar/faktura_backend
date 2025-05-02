const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Language', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    home: {
      type: DataTypes.TEXT,  
      allowNull: false
    },
    order: {
      type: DataTypes.TEXT,  
      allowNull: false
    },
    our_customers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    about_us: {
      type: DataTypes.TEXT,  
      allowNull: false
    },
    contact_us: {
      type: DataTypes.TEXT,  
      allowNull: false
    },
    terms: {
      type: DataTypes.TEXT,  
      allowNull: false
    },
    button: {
      type: DataTypes.TEXT,  
      allowNull: false
    },
    paragraph: {
      type: DataTypes.TEXT,  
      allowNull: false
    }
  });
};