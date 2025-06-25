const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

let links = {
  1: "https://suno.com/playlist/ee53d025-45c5-4d12-97cb-af928587ec04",
  2: "https://suno.com/playlist/8f789a5f-3ab4-4c3f-8393-5d7beeb154c6",
  3: "https://suno.com/playlist/27661b70-1c3a-446b-a3a4-4f28e896edc6",
  4: "https://suno.com/playlist/6638e8ae-f9f0-4614-b3a1-558bcd03fd47",
  5: "https://suno.com/playlist/acfc8579-1925-4483-a612-38629162024e",
  6: "https://suno.com/playlist/19f3374d-3a03-4220-a58d-35fe9e15dd08"
};

app.use(bodyParser.urlencoded({ extended: true }));

// Setze den statischen Ordner auf "public"
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { links });
});

// Hier kannst du beliebig viele Routen für deine Links einfügen
app.get("/q", (req, res) => {
  res.redirect(links[1]);
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
