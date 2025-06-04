// Task 2: Basic CRUD Operations
// 1. Queries :
// Find all books in a specific genre
db.books.find({genre: "Romance"})

//Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } }).pretty()

//Find books by a specific author
db.books.find({ author: "J.D. Salinger" }).pretty()

//Update the price of a specific book
db.books.updateOne(
  { title: "To Kill a Mockingbird" },          
  { $set: { price: 14.99 } } 
)

//Delete a book by its title
db.books.deleteOne({ title: "1984" })

//Task 3: Advanced Queries
// A query to find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

//Use projection to return only the title, author, and price fields in your queries
db.books.find(
  { published_year: { $gt: 1950 } },
  { title: 1, author: 1, price: 1, _id: 0 }
)

//Implement sorting to display books by price (both ascending and descending)
//Ascending order
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 })  // 1 for ascending

//Descending order
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 })  // -1 for descending

//Get first page on the First 5 books
db.books.find().limit(5).skip(0)

//Task 4: Aggregation Pipeline
//An aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",                // Group by genre
      averagePrice: { $avg: "$price" }  // Calculate average price for each genre
    }
  },
  {
    $project: {
      _id: 0,                      // Hide the _id field
      genre: "$_id",               // Show genre instead
      averagePrice: { $round: ["$averagePrice", 2] } // Round to 2 decimals
    }
  }
])

// find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {_id: "$author", bookCount: { $sum: 1 }}
  },
  {
    $sort: { bookCount: -1 }   // Sort descending by book count
  },
  {
    $limit: 1                  // Get only the top author
  },
  {
    $project: {
      _id: 0,
      author: "$_id",
      bookCount: 1
    }
  }
])

//Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $subtract: [ "$published_year", { $mod: [ "$published_year", 10 ] } ] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

//Create an index on the title field for faster searches
db.books.find({ $text: { $search: "Hobbit" } })

//Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

//Use the explain() method to demonstrate the performance improvement with your indexes
db.books.find({ author: "George Orwell", published_year: { $gte: 1940 } }).explain("executionStats")

