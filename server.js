const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4000;

let links = {
  1: "https://suno.com/@derversenflechter",
  2: "",
  3: ""
};

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "deinStandardPasswort";

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("links", { links });
});

app.get("/q", (req, res) => {
  res.redirect(links[1]);
});

app.get("/admin", (req, res) => {
  res.render("admin", { links, error: null });
});

app.post("/admin", (req, res) => {
  const { password, link1, link2, link3 } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.render("admin", { links, error: "Falsches Passwort!" });
  }

  links[1] = link1;
  links[2] = link2;
  links[3] = link3;
  res.render("admin", { links, error: "Gespeichert!" });
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
