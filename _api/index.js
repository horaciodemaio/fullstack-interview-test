const {Branches} = require("./src/db");
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { ArrayBranches } = require("./contents")

conn.sync({ force: true })
.then(() => {
  //cargo las ramas base y compare en la BD
  const Branche = ArrayBranches.map((d) => {
    return {
      name: d.name,
    }
  });
  Branches.bulkCreate(Branche).then(console.log("me cargaron los datos en la tabla de Branches"))
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
