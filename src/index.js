const express = require("express"); 
const typeorm = require("typeorm");

const Wilder = require("./entity/Wilder");

const app = express(); 

const DataSource = new typeorm.DataSource({
    type:"sqlite",
    database:"./wildersdb.sqlite",
    synchronize: true,
    entities: [require("./entity/Wilder")], 
})
app.get("/", (req, res) => { 

  res.send("Hello World"); 
}); 

//Start Server
 // app.listen(3000, () => console.log("Server started on 3000"));

const start = async() => {
    await DataSource.initialize();
    await DataSource.getRepository(Wilder).save({
        name: "Sophie Roudier",
    });
    app.listen(3000, () => console.log("Server started on 3000"));
};
start();