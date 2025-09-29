// devops-demo.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello, DevOps World! 🚀");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP", message: "Service is healthy ✅" });
});

// Users API
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.json(users);
});

// Add a user
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });
  const newUser = { id: Math.floor(Math.random() * 1000), name };
  res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
