const Sequelize = require('sequelize');
const sequelize = require('../db');
const Author = require('../author/model')
const Game = require('../game/model')
const User = require('../users/model')

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

Author.belongsTo(Quote)
Game.belongsTo(Quote)
User.belongsTo(Quote)

module.exports = Quote;
