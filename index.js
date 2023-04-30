const http = require('http')
const cors = require('cors')
const app = require('./app')
const server = http.createServer(app)
require('dotenv').config()

app.use(cors({
    origin: process.env.CLIENT_URL
}))

const port = process.env.PORT || 3030;
const start = async () => {
  try {
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();