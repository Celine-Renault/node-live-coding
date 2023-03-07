const express = require("express"); 
// const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
// const utils = require("./utils");

const app = express(); 

app.use(express.json());

app.get("/", (req, res) => { 
  res.send("Hello World"); 
}); 

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);

const start = async() => {
    await dataSource.initialize();
    await dataSource.getRepository(Wilder).save({
        name: "New Wilder"
    });
    app.listen(3000, () => console.log("Server started on 3000"));
};
start();