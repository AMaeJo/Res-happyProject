const reshappy_controller = require("../controllers/reshappy.controller");

module.exports = (app) => {
    app.post("/api/reshappyDB", reshappy_controller.create_recipe);
    app.get("/api/reshappyDB", reshappy_controller.get_all);
    app.get("/api/reshappyDB/:id", reshappy_controller.get_id);
    app.put("/api/reshappyDB/:id", reshappy_controller.update);
    app.delete("/api/reshappyDB/:id", reshappy_controller.delete);
}