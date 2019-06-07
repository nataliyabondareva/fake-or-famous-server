const Sequelize = require('sequelize');
// const sequelize = require('../db');

const connectionString =
  process.env.DATABASE_URL ||
  'postgres://postgres:secret@localhost:5432/postgres';
const sequelize = new Sequelize(connectionString, {
  define: { timestamps: false },
  operatorsAliases: false
});

sequelize
  .sync()
  .then(() => {
    console.log('Sequelize updated database schema');
  })
  .catch(console.error);

// console.log('userSequelize', sequelize)

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    field: 'password',
    allowNull: false
  }
},
  {
    timestamps: false,
    tableName: 'users'
  }
);

module.exports = User;
