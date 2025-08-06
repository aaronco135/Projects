const users_route = require("./routes/users_route")
const cvs_route = require("./routes/cv_management_route")
const authRouter = require("./routes/auth_route");
const cors = require('cors')
const express = require('express')
const app = express();

require('./config')

app.use(cors());
app.use(express.json())



app.use("/users", users_route)
app.use("/cvs", cvs_route)
app.use("/api/auth", authRouter);

app.listen(8000, () => {
    console.log(`Server running on port ${8000}`);
  });