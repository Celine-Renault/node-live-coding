const typeorm = require("typeorm");
const entityWilder = require("./entity/Wilder");
const entitySkill = require("./entity/Skill");
// j'imprte les tables
module.exports = {
    dataSource: new typeorm.DataSource({ 
        // je declare, cree mas base de donnee qui a 2 tables/entity skill et wilder
        type: "sqlite",
        database: "./wildersdb.sqlite",
        synchronize: true,
        entities: [entityWilder, entitySkill],
        logging: ["query", "error"],
    })
};