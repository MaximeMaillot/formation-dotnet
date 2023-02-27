import express from "express"
import ip from "ip"
import { dirname } from "path";
import * as url from 'url';
import { success } from "./method.js";
// Créer une instance de Express
const app = express()
const port = 7777
const ipAdress = ip.address()
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let data = [{
    "category": "Reférencement",
    "name": "SEO Premium",
    "difficulte": 3,
    "price": 249,
    "id": 1,
    "created": "2019-06-16T16:54:46.308Z"
},
{
    "category": "Langage de programmation",
    "name": "C#",
    "difficulte": 4,
    "price": 299,
    "id": 2,
    "created": "2019-06-16T16:54:56.308Z"
},
{
    "category": "Langage de programmation",
    "name": "JavaScript",
    "difficulte": 3,
    "price": 199,
    "id": 3,
    "created": "2019-06-16T16:55:06.308Z"
},
{
    "category": "Langage de programmation",
    "name": "HTML/CSS",
    "difficulte": 2,
    "price": 149,
    "id": 4,
    "created": "2019-06-16T16:55:16.308Z"
},
{
    "category": "FrameWork",
    "name": "React",
    "difficulte": 3,
    "price": 299,
    "id": 5,
    "created": "2019-06-16T16:55:26.308Z"
},
{
    "category": "FrameWork",
    "name": "Vue.Js",
    "difficulte": 2,
    "price": 299,
    "id": 6,
    "created": "2019-06-16T16:55:36.308Z"
},
{
    "category": "FrameWork",
    "name": "Angular",
    "difficulte": 4,
    "price": 299,
    "id": 7,
    "created": "2019-06-16T16:55:46.308Z"
},
{
    "category": "Outils collaboratifs",
    "name": "Git",
    "difficulte": 3,
    "price": 199,
    "id": 8,
    "created": "2019-06-16T16:55:56.308Z"
},
{
    "category": "FrameWork",
    "name": "Sass",
    "difficulte": 3,
    "price": 149,
    "id": 9,
    "created": "2019-06-16T16:56:06.308Z"
}]

let lastId = data.length

app.use(express.json())

// GET All
app.get("/data", (req, res) => {
    res.json(success("Tout les cours", data))
})

// GET by ID
app.get("/data/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const find = data.find((d) => {
        return d.id == id
    })
    let message = find ? `Un cours à été trouvé avec l'id ${id}` : `Aucun cours avec l'id ${id}`
    res.json(success(message, find))
})

//GET by difficulty
app.get("/data/difficulty/:difficulty", (req, res) => {
    const difficulty = parseInt(req.params.difficulty);
    const filter = data.filter((d) => {
        return d.difficulte == difficulty
    })
    let message = filter != [] ? `Le(s) cours trouvé(s) avec la difficulté ${difficulty}` : `Aucun cours avec la difficulté ${difficulty}`
    res.json(success(message, find))
})


//Get by name
app.get("/data/name/:name", (req, res) => {
    const name = req.params.name;
    const find = data.filter((d) => {
        return d.name.toLowerCase() == name.toLowerCase()
    })
    let message = find ? `Le(s) cours trouvé(s) avec le nom ${name}` : `Aucun cours avec le nom ${name}`
    res.json(success(message, find))
})

//GET by price
app.get("/data/price/:minPrice/:maxPrice", (req, res) => {
    const minPrice = parseInt(req.params.minPrice);
    const maxPrice = parseInt(req.params.maxPrice);
    const filter = data.filter((d) => {
        return d.price >= minPrice && d.price <= maxPrice
    })
    let message = filter != [] ? `Le(s) cours trouvé(s) avec comme prix minimum ${minPrice} et prix maximum ${maxPrice}` : `Aucun cours trouvé dans cette tranche de prix ${minPrice}|${maxPrice}`
    res.json(success(message, find))
})

//GET by date
app.get("/data/date/:date", (req, res) => {
    const date = req.params.date;
    res.json("TODO DATE")
})

// POST
app.post("/data", (req, res) => {
    const body = req.body
    if (!body.hasOwnProperty("category") || !body.hasOwnProperty("name") || !body.hasOwnProperty("difficulte") || !body.hasOwnProperty("price")) {
        res.status(400).send({ message: "Le cours ne contient pas les informations nécessaires pour être ajouté", data: req.body })
    }
    let dataItem = {}
    for (const key in body) {
        dataItem[key] = body[key]
    }
    dataItem.id = ++lastId
    dataItem.created = new Date().toISOString()
    data.push(dataItem)
    res.send(success(`Le cours à été ajouté avec l'id : ${lastId}`, dataItem))
})

// PUT by ID
app.put("/data/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            for (const key in body) {
                if (key != "id" && data[i].hasOwnProperty(key)) {
                    data[i][key] = body[key]
                }
            }
            res.json(success(`Modification du cours avec id : ${id}`, data[i]))
        }
    }
    res.json(success("Pas de cours à modifier"))
})

// DELETE by ID
app.delete("/data/:id", (req, res) => {
    const id = parseInt(req.params.id)
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            const removed = data.splice(i, 1)
            res.json(success(`Supression du cours avec id : ${id}`, removed))
        }
    }
    res.json(success("Pas de cours à supprimer"))
})

app.listen(port, () => { })