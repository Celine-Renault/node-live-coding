const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
    create: (req, res) => {
        dataSource 
            .getRepository(Wilder)
            .save(req.body)
            .then(() => {
                res.send("Created wilder");
            })
            .catch(() => {
                res.send("Error while creating wilder");
            });
    },
    read: (req, res) => {
        dataSource 
            .getRepository(Wilder)
            .find()
            .then((data) => { 
                res.send(data);
            })
            .catch(() => {
                res.send("Error while reading wilder");
            });
    },
    update: (req, res) => {
         dataSource 
              .getRepository(Wilder)
              .update(req.params.id, req.body)
              .then(() => {
                  res.send("Update wilder");
              })
              .catch(() => {
                  res.send("Error while updating wilder");
              });
      },
      /*
      delete: (req, res) => {
          dataSource 
              .getRepository(Wilder)
              .delete(req.params.id)
              .then(() => {
                  res.send("Remove wilder");
              })
              .catch(() => {
                  res.send("Error while removing wilder");
              });
      },
      */
      delete: async(req, res) => {
       // const repository = dataSource.getRepository(Wilder); // syntaxe plus courte à mettre ligne 55 datasource.repository(Wilder)...
        try { // je fais tourner des instructions si ca ne marche pas je rentre dans le catch error
            // trouve un wilder par identifiant
            const user = await dataSource.getRepository(Wilder).findOneBy({id: req.params.id});
          //  console.log(user);
            if(!user){
                throw new Error(); // connecte au catch (error)
            }
            await dataSource 
            .getRepository(Wilder)
            .delete(req.params.id)
                res.send("Delete wilder");
            } catch (error) {
               // res.statuts(500).json("Test error 500");
                res.status(404).send("Test error 404");
        }
    },
};