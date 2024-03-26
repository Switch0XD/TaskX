const { Model } = require('objection');
const { knex } = require('knex');

// Initialize knex
const connectionConfig = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: '12345',
    database: "admin_panel"
  },
  debug: true
};

const knexInstance = knex(connectionConfig);

Model.knex(knexInstance);

knexInstance.on('query', function (queryData) {
  console.log(queryData.sql);
  console.log(queryData);
});

module.exports = {
  Model,
  knex: knexInstance,
};
