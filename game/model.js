const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('../users/model')

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

module.exports = Game;
