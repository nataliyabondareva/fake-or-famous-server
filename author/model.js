const Sequelize = require('sequelize');
const sequelize = require('../db');

const Author = sequelize.define('authors', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING,
    field: 'picture',
    allowNull: false
  }
},
  {
    timestamps: false,
    tableName: 'authors'
  }
);

module.exports = Author;
