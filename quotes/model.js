const Sequelize = require('sequelize');
const sequelize = require('../db');
const Author = require('../author/model')
const Game = require('../game/model')
const User = require('../users/model')

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

// Author.belongsTo(Quote)
Quote.belongsTo(Game)
Quote.belongsTo(User)
Game.hasMany(Quote)
User.hasMany(Quote)

module.exports = Quote;
