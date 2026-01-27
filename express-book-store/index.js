const express = require("express");
const { loggerMiddleware } = require("./middlewares/logger");
const bookRouter = require("./routes/book.routes");

const app = express();
const PORT = 8000;

/* Middlewares */
app.use(express.json());
app.use(loggerMiddleware);

/* Routes */
app.use("/books", bookRouter);

/* Root */
app.get("/", (req, res) => {
  res.send("Express Book API is running");
});

/* Start server */
app.listen(PORT, () => {
  console.log(`HTTP server running on PORT ${PORT}`);
});
