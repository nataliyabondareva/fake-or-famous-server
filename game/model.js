const Sequelize = require('sequelize');
const sequelize = require('../db');

/*
GAME TABLE                
id    winnner    STATUS        
KEY    F. KEY    PENDING???  
*/


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

module.exports = Game;
