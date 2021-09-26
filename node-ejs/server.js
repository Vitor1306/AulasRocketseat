const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolvendo codigo"
        },
        {
            title: "E",
            message: "studando EJS"
        },
        {
            title: "M",
            message: "uito facil"
        },
        {
            title: "A",
            message: "plicacoes futuras"
        },
        {
            title: "I",
            message: "mpressionado com EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "Estudando Webdevelopment"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/about", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando")