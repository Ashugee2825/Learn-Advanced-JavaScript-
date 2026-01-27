const express = require("express");
const { BOOKS } = require("../db/book");

const router = express.Router();

/* GET all books */
router.get("/", (req, res) => {
  res.json(BOOKS);
});

/* GET book by id */
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) return res.status(400).json({ error: "id must be a number" });

  const book = BOOKS.find((b) => b.id === id);

  if (!book)
    return res.status(404).json({ error: `Book with id ${id} not found` });

  res.json(book);
});

/* POST add new book */
router.post("/", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author)
    return res.status(400).json({ error: "title and author are required" });

  const id = BOOKS.length + 1;

  const newBook = { id, title, author };
  BOOKS.push(newBook);

  res.status(201).json({
    message: "Book created successfully",
    book: newBook,
  });
});

/* DELETE book */
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = BOOKS.findIndex((b) => b.id === id);

  if (index === -1) return res.status(404).json({ error: "Book not found" });

  BOOKS.splice(index, 1);

  res.json({ message: "Book deleted successfully" });
});

module.exports = router;
