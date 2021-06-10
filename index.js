const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./models/Task");
require("./models/Class");
require("./services/passport");

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/taskRoutes")(app);
require("./routes/unitRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // Like main.js file, or main.css files
  app.use(express.static("client/build"));
  // Express will serve up index.html file
  // If it doens't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

