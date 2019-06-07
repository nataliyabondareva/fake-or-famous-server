const Sequelize = require('sequelize');
const sequelize = require('../db');
const Game = require('./model')
const User = require('../users/model')

module.exports = (sequelize) => {
  const Quote = sequelize.define('quotes', {
    content: {
      type: Sequelize.STRING,
      field: 'content',
      allowNull: true
    },
    author: {
      type: Sequelize.STRING,
      field: 'author',
      allowNull: true
    },
    picture: {
      type: Sequelize.STRING,
      field: 'picture',
      allowNull: true
    },
    real: {
      type: Sequelize.BOOLEAN,
      field: 'real',
      allowNull: true
    },
  },
    {
      timestamps: false,
      tableName: 'quotes'
    }
  );
  Quote.belongsTo(User)
  Quote.associate = function (models) {
    models.Game.hasMany(models.Game)
  }
  return Quote, Game
}

