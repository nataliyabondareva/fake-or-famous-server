const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('../users/model')
const Quote = require('./quoteModel')

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
// console.log('Quote test:', Quote)
// Game.hasMany(Quote)
Game.associate = function (models) {
  models.Quote.hasMany(models.Quote)
}


module.exports = Game;
