const user_router = require('./routes/usersRoutes')
const jwt_router = require('./routes/jwtRoutes')

const cors = require('cors')
const express = require('express')
const app = express();

require('./config')

app.use(cors());
app.use(express.json())

app.use("/users", user_router)
app.use("/jwt", jwt_router)


app.listen(3001, () => {
  console.log(`Server running on port ${3001}`);
});