const Sequelize = require('sequelize');
const sequelize = require('../db');

/*
QUOTES TABLE                
id    content    authorId    real    game_id
KEY    STRING    F. KEY    BOOLEAN    F. KEY

*/
const Quote = sequelize.define('quotes', {
  content: {
    type: Sequelize.STRING,
    field: 'content',
    allowNull: false
  },
  authorId: {
    type: Sequelize.INTEGER,
    field: 'authorId',
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'userId',
    allowNull: false
  },
  real: {
    type: Sequelize.BOOLEAN,
    field: 'real',
    allowNull: false
  },
  gameId: {
    type: Sequelize.INTEGER,
    field: 'gameId',
    allowNull: false
  }
},
  {
    timestamps: false,
    tableName: 'quotes'
  }
);

module.exports = Quote;
