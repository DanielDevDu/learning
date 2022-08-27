
const express = require('express');
const routerApi =  require("./routes");

// create express app
const app = express();

// define port
const port = process.env.PORT || 8000;

// create routes
routerApi(app);


// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});