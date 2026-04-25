const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const app = express();

const storage = multer.diskStorage({});
const upload = multer({ storage });

cloudinary.config({
  cloud_name: "dg6adzfgv",
  api_key: "767259892655488",
  api_secret: "9AetL0aZWADHCpCfxbY786XnsYQ",
});

app.use(cors({
  origin: "https://your-frontend.onrender.com"
}));

app.use(express.json());

mongoose.connect("mongodb+srv://Pawan:Pvn@cluster0.xdjswoz.mongodb.net/GarhKumaonCrafts?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  price: Number,
  rating: Number,
  image: String
}, { timestamps: true });

const Product = mongoose.model("product", productSchema);


app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "Image required" });

    const result = await cloudinary.uploader.upload(req.file.path);

    const { title, category, description } = req.body;
    const priceNum = parseFloat(req.body.price);
    const ratingNum = parseFloat(req.body.rating);

    if (!title || !category || !description || isNaN(priceNum) || isNaN(ratingNum)) {
      return res.status(400).json({ error: "All fields required and numbers must be valid" });
    }

    const newProduct = new Product({
      title,
      category,
      description,
      price: priceNum,
      rating: ratingNum,
      image: result.secure_url
    });

    const saved = await newProduct.save();
    res.json(saved);
  } catch (err) {
    console.log("Create Error:", err);
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/products", async (req, res) => {
  try {
    const { limit, category } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    let query = Product.find(filter);

    if (limit) {
      query = query.limit(parseInt(limit));
    }

    const products = await query;

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put("/updateproducts/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, category, description } = req.body;
    const priceNum = parseFloat(req.body.price);
    const ratingNum = parseFloat(req.body.rating);

    let updateData = {
      title,
      category,
      description,
      price: priceNum,
      rating: ratingNum,
    };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updateData.image = result.secure_url;
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    console.log("Update Error:", err);
    res.status(500).json({ error: err.message });
  }
});


app.delete("/deleteproduct/:id", async (req, res) => {
  const id = req.params.id;

  try {

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});