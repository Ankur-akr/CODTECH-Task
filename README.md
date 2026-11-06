CODTECH Internship Tasks

A collection of web development and software engineering projects completed as part of my CODTECH internship. This repository showcases practical implementations across frontend development, backend APIs, real-time communication, and command-line application development.

Projects

Project| Description| Technologies
"Personal Portfolio" (Portfolio Project using HTML & CSS/Portfolio using HTML & CSS/vcard-personal-portfolio-master/)| Responsive personal portfolio website.| HTML, CSS, JavaScript
"Collaborative Editor" (collab-editor/)| Real-time collaborative text editor using WebSockets.| React, Node.js, Socket.IO
"Library Management API" (library-api-codtech/)| RESTful API for managing library books.| Node.js, Express, MongoDB
"Todo CLI" (todo-cli-refactor/)| Modular command-line task management application.| Node.js, JavaScript, yargs

---

1. Personal Portfolio

A responsive personal portfolio website showcasing profile information, education, experience, skills, projects, and blog content.

Features

- Profile sidebar with contact and social links.
- About, Resume, Portfolio, and Blog sections.
- Project category filtering.
- Responsive layout.
- Interactive navigation.

Tech Stack: HTML5, CSS3, JavaScript.

Run locally

Open the "index.html" file inside the portfolio project directory in your browser.

2. Real-Time Collaborative Editor

A browser-based collaborative note editor that synchronizes text changes between connected users using Socket.IO.

Features

- React-based text editor.
- Real-time text synchronization.
- Multi-user connection support.
- Automatic document loading for new connections.
- Event-driven communication using WebSockets.

Tech Stack: React, Node.js, Express, Socket.IO.

Run locally

Backend:

cd collab-editor/server
npm install express socket.io cors
node index.js

Frontend:

Start the React client from "collab-editor/client" using its configured React development environment.

Ensure the Socket.IO client connects to "http://localhost:3001".

Note: Document content is currently stored in server memory and resets when the server restarts.

3. Library Management REST API

A RESTful backend application for managing library book records using Express and MongoDB.

Features

- Create new books.
- Retrieve all books.
- Retrieve individual books by ID.
- Update existing book details.
- Delete book records.
- Basic error handling and validation.

Tech Stack: Node.js, Express.js, MongoDB, Mongoose.

Book Schema

Field| Type
title| String
author| String
publishedYear| Number
genre| String
available| Boolean

API Endpoints

Base URL: "http://localhost:3000/api/books"

Method| Endpoint| Description
GET| "/api/books"| Get all books
GET| "/api/books/:id"| Get book by ID
POST| "/api/books"| Add a new book
PUT| "/api/books/:id"| Update book
DELETE| "/api/books/:id"| Delete book

Installation

cd library-api-codtech
npm install

Ensure MongoDB is running locally on port "27017".

Start the server:

npm start

The application connects to:

mongodb://localhost:27017/library

Example Request

{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "publishedYear": 1988,
  "genre": "Fiction",
  "available": true
}

4. Refactored Todo CLI

A command-line task management application built with Node.js. The project separates CLI commands from the underlying todo service logic and stores tasks in a local JSON file.

Features

- Add new tasks.
- List saved tasks.
- Remove tasks using their IDs.
- Modular service architecture.
- Local JSON-based storage.
- Command-line argument parsing with yargs.

Tech Stack: Node.js, JavaScript ES Modules, yargs, File System.

Installation

cd todo-cli-refactor
npm install yargs

Ensure the project is configured for ES modules using ""type": "module"" in "package.json".

Available Commands

Add a task:

node index.js add "Buy groceries"

List tasks:

node index.js list

Remove a task:

node index.js remove 1

---

Repository Structure

CODTECH-Task/
│
├── Portfolio Project using HTML & CSS/
│   └── Portfolio using HTML & CSS/
│       └── vcard-personal-portfolio-master/
│
├── collab-editor/
│   ├── client/
│   └── server/
│
├── library-api-codtech/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── todo-cli-refactor/
│   ├── services/
│   └── index.js
│
└── README.md

Learning Outcomes

Through these projects, I gained practical experience in:

- Building responsive web interfaces using HTML, CSS, and JavaScript.
- Developing RESTful APIs with Node.js and Express.
- Integrating MongoDB using Mongoose.
- Implementing real-time communication using Socket.IO.
- Writing modular and maintainable JavaScript applications.
- Building command-line tools with yargs.
- Managing application data using JSON and databases.

Author

Ankur Kumar Rai

- GitHub: "@Ankur-akr" (https://github.com/Ankur-akr)
- LinkedIn: "Ankur Rai" (https://www.linkedin.com/in/ankur-akr)

---

If you find this repository useful, feel free to explore the projects and share your feedback!
