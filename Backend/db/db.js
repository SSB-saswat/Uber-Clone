const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => console.err);
}

module.exports = connectToDb;
