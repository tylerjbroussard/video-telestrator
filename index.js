const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();

const {
  mainGetResponse,
  mainPostResponse,
} = require("./routes/routeResponses");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//routes
app.get("/", mainGetResponse);
app.get("/main", mainGetResponse);
app.post("/main", mainPostResponse);
app.get("/draft", (req, res) => res.render("pages/draft"));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
