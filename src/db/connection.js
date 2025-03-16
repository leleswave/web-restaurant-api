import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/db/menu.db'
});

sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to the SQLite database');
  })
  .catch((err) => {
    console.error('Could not connect to the SQLite database:', err);
  });


export { sequelize };
