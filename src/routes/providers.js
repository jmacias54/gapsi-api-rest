const express = require("express");
var cors = require('cors')
const providerSchema = require("../models/provider");
const providerService = require("../service/providers");
const router = express.Router();

// create 
router.post("/providers",providerService.createProvider);

// get all 
router.get("/providers", cors(),(req, res) => {
    providerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get detail
router.get("/providers/:id", cors(),(req, res) => {
  const { id } = req.params;
  providerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete 
router.delete("/providers/:id", cors(),(req, res) => {
  const { id } = req.params;
  providerSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update
router.put("/providers/:id", cors(),(req, res) => {
  const { id } = req.params;
  const { name, product, email , phone} = req.body;
  providerSchema
    .updateOne({ _id: id }, { $set: { name,product, email , phone} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;