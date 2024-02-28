import app from "./server.js";

const puerto = 8082;

app.listen(puerto, () => {
  console.log(`puerto esta en http://localhost:${puerto}`);
});
