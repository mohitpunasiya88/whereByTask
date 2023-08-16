const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Define a schema and a model
const userSchema = new mongoose.Schema({
  name: String,
  lastname: String
});

const Users = mongoose.model('users', userSchema);

// Create a new item
app.post('/postusers', async (req, res) => {
  try {
    const newItem = new Users(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all items
app.get('/getusers', async (req, res) => {
  try {
    const items = await Users.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an item by ID
app.put('/edituser/:id', async (req, res) => {
  try {
    const updatedItem = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an item by ID
app.delete('/deleteuser/:id', async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


/////////////



// Define a schema and a model
const productSchema = new mongoose.Schema({
    name: String,
  });
  
  const Product = mongoose.model('products', productSchema);
  
  // Create a new item
  app.post('/postproduct', async (req, res) => {
    try {
      const newItem = new Product(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Get all items
  app.get('/getproduct', async (req, res) => {
    try {
      const items = await Product.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Update an item by ID
  app.put('/editproduct/:id', async (req, res) => {
    try {
      const updatedItem = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Delete an item by ID
  app.delete('/deleteproduct/:id', async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
