const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();


db.sequelize.sync().then(() => {
    app.listen(3030, () => {
        console.log("Server running on port 3030");
    });
});



