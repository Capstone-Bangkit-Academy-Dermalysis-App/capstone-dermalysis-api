const app = require("./app");

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

//listen
app.listen(port, host, () => {
  console.log(`Listening: http://${host}:${port}`);
});
