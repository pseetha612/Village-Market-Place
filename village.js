const mongoose = require("mongoose");

const villageSchema = new mongoose.Schema(
  {
    villageName: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    marketName: {
      type: String,
      required: true,
    },

    products: [
      {
        type: String,
      },
    ],

    contactNumber: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Village", villageSchema);