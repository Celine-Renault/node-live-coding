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
};