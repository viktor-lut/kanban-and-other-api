const express = require('express');
const routes = require("./routes");
const bp = require("./bodyParseer");
const dbConnection = require("./dbConnection");

dbConnection();
const app = express();
const PORT = process.env.PORT || 5000;

routes(app);
bp(app);

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
})



