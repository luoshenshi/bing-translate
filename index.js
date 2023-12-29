const app = require("express")();
const { translate } = require("bing-translate-api");
let PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Bing translation API");
});

app.get("/query", (req, res) => {
  let query = req.query.text;
  let toTranslate = req.query.to;
  translate(query, null, toTranslate).then((resp) => {
    res.json(resp);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
