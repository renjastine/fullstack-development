const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(express.json());
app.use(cors())

// Routers
const postRouter = require("./routes/Posts.js")
app.use("/posts", postRouter)

db.sequelize.sync().then(() => {
    app.listen(3030, () => {
        console.log("Server running on port 3030");
    });
});



