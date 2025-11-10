import myExpress from "./myexpress.js";

const app = myExpress();
const PORT = 3000;

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world from my own express");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
