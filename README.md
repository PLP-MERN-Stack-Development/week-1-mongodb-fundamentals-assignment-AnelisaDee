[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19702314&assignment_repo_type=AssignmentRepo)
# MongoDB Bookstore Project

This project demonstrates basic MongoDB operations including data insertion, querying, updating, deleting, aggregation, indexing, and performance analysis using a sample `books` collection.

## 📁 Project Structure
.
├── insert_books.js # JavaScript script to insert sample book data
├── queries.js # MongoDB queries for CRUD and aggregation
├── README.md # This file


---

## 📋 Prerequisites

- MongoDB installed locally (`mongod` should be running)
- MongoDB Shell (`mongo`) or MongoDB Compass
- Node.js (if using `insert_books.js` with Node)

---

## 🚀 How to Run

### Option 1: Using MongoDB Shell

1. Open your terminal and start the MongoDB shell:
   ```bash
   mongo
2. Switch to your desired database:
use plp_bookstore

Paste the contents of insert_books.js directly into the shell to insert sample data.

Run the queries from queries.js to perform operations like:

Finding books

Updating/deleting documents

Aggregations

Indexing

Option 2: Using MongoDB Compass
Open MongoDB Compass and connect to mongodb://localhost:27017.

Navigate to the plp_bookstore database and click on the books collection.

Use the Documents, Aggregation, and Indexes tabs to:

View and filter your data

Run aggregations

Create and analyze indexes

📘 Example Queries
Find all books:

js
Copy
Edit
db.books.find().pretty()
Find books by a specific author:

js
Copy
Edit
db.books.find({ author: "George Orwell" })
Update price of a book:

js
Copy
Edit
db.books.updateOne({ title: "1984" }, { $set: { price: 9.99 } })
Average price by genre:

js
Copy
Edit
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])
🖼️ Screenshot Requirement
Include a screenshot of your MongoDB Compass → Documents tab showing a sample of your book data in the books collection.

✅ Done
 Data Insertion

 CRUD Queries

 Aggregations

 Indexing

 Performance Analysis

 README and Screenshot

yaml
Copy
Edit

---

Let me know if you’d like a version with placeholders for your name or course!
## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 