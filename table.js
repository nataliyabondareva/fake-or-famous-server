// const Sequelize = require('sequelize');
// const sequelize = require('./db');

// const Game = sequelize.define('games', {
//   winner: {
//     type: Sequelize.INTEGER,
//     field: 'winner',
//     allowNull: true
//   },
//   status: {
//     type: Sequelize.STRING,
//     field: 'status',
//     allowNull: true
//   }
// },
//   {
//     timestamps: false,
//     tableName: 'games'
//   }
// );

// Game.associate = function (models) {
//   models.Quote.hasMany(models.Quote)
// }

// const Quote = sequelize.define('quotes', {
//   content: {
//     type: Sequelize.STRING,
//     field: 'content',
//     allowNull: true
//   },
//   author: {
//     type: Sequelize.STRING,
//     field: 'author',
//     allowNull: true
//   },
//   picture: {
//     type: Sequelize.STRING,
//     field: 'picture',
//     allowNull: true
//   },
//   real: {
//     type: Sequelize.BOOLEAN,
//     field: 'real',
//     allowNull: true
//   },
// },
//   {
//     timestamps: false,
//     tableName: 'quotes'
//   }
// );

// Quote.associate = function (models) {
//   models.Game.hasMany(models.Game)
// }


// // module.exports = Quote;

// const User = sequelize.define('users', {
//   email: {
//     type: Sequelize.STRING,
//     field: 'email',
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.STRING,
//     field: 'password',
//     allowNull: false
//   }
// },
//   {
//     timestamps: false,
//     tableName: 'users'
//   }
// );

// User.belongsTo(Game)
// Quote.belongsTo(User)

// module.exports = { Game, Quote, User };
