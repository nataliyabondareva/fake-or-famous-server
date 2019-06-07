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
    allowNull: true
  },
  prompt: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "What's the funniest thing you've heard this week?"
  },
},
  {
    timestamps: false,
    tableName: 'games'
  }
);

User.belongsTo(Game)
Game.hasMany(User)

module.exports = Game;
