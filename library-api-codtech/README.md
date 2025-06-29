# 📚 Library API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing books in a library system.

---

## 🔧 Features

- 📥 Create a new book
- 📖 Read (all or single) book details
- ✏️ Update book information
- ❌ Delete a book

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **MongoDB + Mongoose**

---

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/library-api.git
cd library-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Start MongoDB** (Ensure it is running locally on default port `27017`)

4. **Run the API**

```bash
npm start
```

---

## 📄 API Endpoints

| Method | Endpoint              | Description         |
|--------|------------------------|---------------------|
| GET    | `/api/books`          | Get all books       |
| GET    | `/api/books/:id`      | Get book by ID      |
| POST   | `/api/books`          | Add a new book      |
| PUT    | `/api/books/:id`      | Update book by ID   |
| DELETE | `/api/books/:id`      | Delete book by ID   |

---

## 🔖 Book Schema

```json
{
  "title": "String",
  "author": "String",
  "publishedYear": Number,
  "genre": "String",
  "available": Boolean
}
```

---

## 📬 Contact

Created by [Your Name] – feel free to reach out!