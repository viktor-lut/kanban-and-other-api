const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


routes(app);


app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
})