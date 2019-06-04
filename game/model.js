const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('../users/model')

const Game = sequelize.define('games', {
  winner: {
    type: Sequelize.INTEGER,
    field: 'winner',
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    field: 'status',
    allowNull: false
  }
},
  {
    timestamps: false,
    tableName: 'games'
  }
);

User.belongsTo(Game)

module.exports = Game;
