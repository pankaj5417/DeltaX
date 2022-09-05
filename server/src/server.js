const app = require("./index");
const connect = require("./configs/db");
const dotenv=require('dotenv')
dotenv.config()
const port=process.env.PORT||5000

app.listen(port, async function () {
  await connect();
  console.log("listening on port 5000");
});
