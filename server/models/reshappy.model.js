const mongoose = require("mongoose");

const recipe_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please fill in Recipe Name!"],
            minLength: [3, "Recipe Name must be at least 3 characters!"],
        },
        creator: {
            type: String,
            required: [true, "Please fill in the Creator!"],
            minLength: [2, "Creator's name must be at least 2 characters!"],
        },
        category: {
            type: String,
            required: [true, "Please fill in the category!"],
            minLength: [3, "The category must be at least 3 characters!"],
        },
        time: {
            type: String,
            required: [true, "Please fill in the Prep Time!"],
            minLength: [1, "The Prep Time must be at least 1 character!"],
        },
        calories: {
            type: String,
            required: [true, "Please fill in the calorie amount!"],
            minLength: [1, "Calories must be at least 1 character!"],
        },
        ingredient: {
            type: String,
            required: [true, "Please put in all ingredients!"],
            minLength: [12, "The ingredient List must be at least 12 characters!"],
        },
        // measurement: String,
        instructions: {
            type: String,
            required: [true, "Please include instructions!"],
            minLength: [12, "The instructions must be at least 12 characters!"],
        },
    },
    { timestamps: true }
)

const Recipe = mongoose.model("Recipe", recipe_schema);

module.exports = Recipe;