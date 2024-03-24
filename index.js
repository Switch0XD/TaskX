const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const knex = require('knex');
const { Model } = require('objection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('hbs', handlebars({ extname: 'hbs' }));
app.set('view engine', 'hbs');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
Model.knex(db);

// Define User and Task models using Objection.js
class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: 'users.id',
          to: 'tasks.user_id'
        }
      }
    };
  }
}

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }
}

// Routes
app.get('/', async (req, res) => {
  // Fetch all users and tasks
  const users = await User.query();
  const tasks = await Task.query();

  res.render('index', { users, tasks });
});

app.post('/add-user', async (req, res) => {
  // Add a new user to the database
  const { name, email, mobile } = req.body;
  await User.query().insert({ name, email, mobile });
  res.redirect('/');
});

app.post('/add-task', async (req, res) => {
  // Add a new task to the database
  const { user_id, task, type, status } = req.body;
  await Task.query().insert({ user_id, task, type, status });
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
