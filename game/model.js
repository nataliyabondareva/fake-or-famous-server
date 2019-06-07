const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('../users/model')
const Quote = require('./quoteModel')

/*
import sequelize not doing anything
declared not defined
when i wrap in function out of scope
*/
module.exports = (sequelize) => {

  const Game = sequelize.define('games', {
    winner: {
      type: Sequelize.INTEGER,
      field: 'winner',
      allowNull: true
    },
    status: {
      type: Sequelize.STRING,
      field: 'status',
      allowNull: true
    }
  },
    {
      timestamps: false,
      tableName: 'games'
    }
  );
  User.belongsTo(Game)
  Game.associate = function (models) {
    models.Quote.hasMany(models.Quote)
  }
  return User, Quote
}
