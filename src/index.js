const express = require("express"); 
// const typeorm = require("typeorm");
const cors = require("cors");
const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
// const utils = require("./utils");
const skillController = require("./controller/skill_controller");

const app = express(); 

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => { 
  res.send("Hello World"); 
}); 

// CRUD to Wilder
app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);

// CRUD to Skill
app.post("/api/skill", skillController.create);
app.get("/api/skill", skillController.read);
app.put("/api/skill/:id", skillController.update);
app.delete("/api/skill/:id", skillController.delete);

// Root Wilder & Skill
app.post("/api/wilder/:wilderId/skill/:skillId/add", wilderController.addSkill);

const start = async() => {
    await dataSource.initialize();
    // await dataSource.getRepository(Wilder).save({
    //     name: "New Wilder"
    // });
    app.listen(5000, () => console.log("Server started on 5000"));
};
start();