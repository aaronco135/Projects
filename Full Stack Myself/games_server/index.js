const games_router = require('./router')

const cors = require('cors')
const express = require('express')
const app = express();

require('./config')

app.use(cors());
app.use(express.json())

app.use("/games", games_router)



app.listen(8000, () => {
  console.log(`Server running on port ${8000}`);
});