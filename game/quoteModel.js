const Sequelize = require('sequelize');
const sequelize = require('../db');
const Game = require('./model')
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

/*
  User.associate = function(models) {
    models.User.hasMany(models.Task);
  };

*/
Quote.associate = function (models) {
  models.Game.hasMany(models.Game)
}
// Quote.belongsTo(Game)
Quote.belongsTo(User)

module.exports = Quote;
