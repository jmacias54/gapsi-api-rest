const express = require("express");
const providerSchema = require("../models/provider");
const providerService = require("../service/providers");
const router = express.Router();

// create 
router.post("/providers",providerService.createProvider);

// get all 
router.get("/providers", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
    providerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get detail
router.get("/providers/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  providerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete 
router.delete("/providers/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  providerSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update
router.put("/providers/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  const { name, product, email , phone} = req.body;
  providerSchema
    .updateOne({ _id: id }, { $set: { name,product, email , phone} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;