const Recipe = require("../models/reshappy.model");

module.exports = {
    create_recipe: (req, res) => {
        Recipe.create(req.body)
            .then((newRecipe) => res.json(newRecipe))
            .catch((err) => {
                res.status(400).json({ err });
            });
    },

    get_all: (req, res) => {
        Recipe.find({})
            .then((allRecipes) => res.json(allRecipes))
            .catch((err) => console.log(err));
    },

    get_id: (req, res) => {
        Recipe.findOne({ _id: req.params.id })
            .then((oneRecipe) => res.json(oneRecipe))
            .catch((err) => console.log(err));
    },

    // find_by_category: (req, res) => {
    //     Recipe.findByCategory({ catergory: req.params.category })
    //         .then((oneRecipeCategory) => res.json(oneRecipeCategory))
    //         .catch((err) => console.log(err));
    // },

    update: (req, res) => {
        Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        })
            .then((updateRecipe) => res.json(updateRecipe))
            .catch((err) => console.log(err));
    },

    delete: (req, res) => {
        Recipe.deleteOne({ _id: req.params.id })
            .then((deleteRecipe) => res.json(deleteRecipe))
            .catch((err) => console.log(err));
    },

};