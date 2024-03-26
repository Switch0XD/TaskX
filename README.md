# TaskX
__ A Task Tracking Solution __

## Description
TaskX is a task tracking solution designed to help individuals and teams manage their tasks efficiently. It provides a user-friendly interface for creating, organizing, and tracking tasks, making it easier to stay organized and productive.


## Technologies Used
- Node.js
- Express.js
- MySQL
- Objection.js (ORM)
- Handlebars (View Engine)
- HTML/CSS/JavaScript

## Project Structure
- `app.js`: Main entry point of the application.
- `controllers/`: Route handlers for different endpoints.
- `models/`: Database models using Objection.js.
- `views/`: Handlebars templates for rendering pages.
- `public/`: Static assets such as CSS stylesheets and client-side JavaScript files.
- `config/`: Configuration file for database connection and other settings.

## Setup Instructions
1. Clone the repository from GitHub: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Configure MySQL database connection in `config/database.js`
4. Start the server: `npm start`
5. Access the application in your browser at `http://localhost:<port>`

## Database Structure
- **Users Table:**
  - Fields: name, email, mobile, id
- **Tasks Table:**
  - Fields: user_id (foreign key to Users table), task_name, task_type, status (pending/done)

## Features
- Admin can add users with name, email, and mobile number.
- Admin can assign tasks to users, specifying the task name, type, and status (pending/done).
- Validation is implemented for email and mobile number fields using JavaScript (regular expressions).
- Admin can export all users and their tasks to an Excel spreadsheet with separate sheets for users and tasks.

## Screenshots
- ![User Creation Form](![image](https://github.com/Switch0XD/TaskX/assets/43660918/574e7479-0051-43e3-8f66-bd2754142527)
)
- ![Task Assignment Form](![image](https://github.com/Switch0XD/TaskX/assets/43660918/87b74c3b-810c-4884-a953-8237e409699e)
)
- ![Excel Export Button](![image](https://github.com/Switch0XD/TaskX/assets/43660918/7286f221-5cb8-4765-8b3a-4ab3559fc760)
)



## Acknowledgements
- This project was completed as part of the HackerKernel MERN Trainee position application.
- Special thanks to HackerKernel for the opportunity to work on this project.
