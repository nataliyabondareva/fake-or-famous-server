const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('../users/model')

const Game = sequelize.define('games', {
  winner: {
    type: Sequelize.INTEGER,
    field: 'winner',
    allowNull: true
  },
  roundsPlayed: {
    type: Sequelize.INTEGER,
    field: 'roundsPlayed',
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
Game.hasMany(User)

module.exports = Game;
