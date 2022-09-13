const mongoose = require("mongoose");

const recipe_schema = new mongoose.Schema(
    {
        name: String,
        creator: String,
        category: String,
        time: String,
        calories: String,
        ingredient: String,
        // measurement: String,
        instructions: String
    },
    { timestamps: true }
)

const Recipe = mongoose.model("Recipe", recipe_schema);

module.exports = Recipe;