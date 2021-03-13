import express from 'express';
const app = express();
app.get("/", (req, res) => {
  console.log('sini');
  res.send("hello world");
});
app.listen(3001, () => console.log('start'));
//# sourceMappingURL=index.js.map