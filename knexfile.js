// knexfile.js

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      connectionString: 'mysql://root:12345@localhost:3306/admin_panel',
      charset: 'utf8'
    }
  }
};
