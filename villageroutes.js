const express = require("express");
const router = express.Router();

const Village = require("../models/village");

// CREATE
router.post("/", async (req, res) => {
  try {
    const village = new Village(req.body);
    const savedVillage = await village.save();
    res.status(201).json(savedVillage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const villages = await Village.find();
    res.status(200).json(villages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const village = await Village.findById(req.params.id);

    if (!village) {
      return res.status(404).json({ message: "Village not found" });
    }

    res.status(200).json(village);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedVillage = await Village.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedVillage) {
      return res.status(404).json({ message: "Village not found" });
    }

    res.status(200).json(updatedVillage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedVillage = await Village.findByIdAndDelete(req.params.id);

    if (!deletedVillage) {
      return res.status(404).json({ message: "Village not found" });
    }

    res.status(200).json({
      message: "Village deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;