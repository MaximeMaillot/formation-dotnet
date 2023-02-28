import express from "express"
import ip from "ip"
import cors from "cors";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

import { getJSON } from "../functions.js";
import Contact from "./Contact.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Express
const app = express();
const port = 7777;

// CONFIG EXPRESS
app
    .use(cors())
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        // authorized headers for preflight requests
        // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept',
        )
        next()
        app.options('*', (req, res) => {
            // allowed XHR methods
            res.header(
                'Access-Control-Allow-Methods',
                'GET, PATCH, PUT, POST, DELETE, OPTIONS',
            )
            res.send()
        })
    })
    .use(express.static(path.join(__dirname, 'public')))
    .use('/static', express.static(path.join(__dirname, 'public')));

/**
 * FUNCTIONS
 */

// Création du diskStorage de multer, il permet de définir notre configuration d'upload
// /!\ Créez les dossiers de destination au cas où avant l'upload
let storage = multer.diskStorage({
    // La limite en taille du fichier
    limits: {
        //fileSize: 500000, //500ko
        fileSize: 1000000, //1Mo
    },
    // La destination, ici ce sera à la racine dans le dossier img
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/img')
    },
    // Gestion des erreurs
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Le fichier doit etre un JPG ou PNG'))
        }
        cb(undefined, true)
    },
    // Fonction qui renomme l'image
    filename: function (req, file, cb) {
        // Genère un nom aléatoire et récupère l'ancienne extension
        cb(
            null,
            Math.random().toString(36).substring(7) +
            '.' +
            file.originalname.split('.')[1],
        )
    },
})
// Création de l'objet multer
const upload = multer({
    storage: storage,
})

// GET All Contact
app.get("/", (req, res) => {
    try {
        let contactJSON = getJSON(__dirname + "/contact.json")
        const contacts = JSON.parse(contactJSON)
        return res.json({ error: false, contacts })
    } catch (e) {
        res.json({ error: e })
    }
})

// GET Contact by ID
app.get("/:id", (req, res) => {
    try {
        const id = req.params.id

        let contactJSON = getJSON(__dirname + "/contact.json")
        const contacts = JSON.parse(contactJSON)

        const find = contacts.find((contact) => {
            return contact.id == id
        })

        return res.json({ error: false, contact: find })
    } catch (e) {
        return res.json({ error: e })
    }
})

// POST Contact
app.post('/', upload.single('img'), async (req, res) => {
    try {
        let contactJSON = getJSON(__dirname + "/contact.json")
        const contacts = JSON.parse(contactJSON)

        const contact = new Contact(req.body.title, req.body.firstname, req.body.lastname, new Date(req.body.birthdate).toISOString(), req.body.phone, req.body.email, req.file.filename)

        contacts.push(contact)
        contactJSON = JSON.stringify(contacts)
        fs.writeFileSync(__dirname + "/contact.json", contactJSON)

        return res.json({ error: false, contact: contact })
    } catch (e) {
        fs.unlink(path.join(__dirname, '../public/img/', req.file.filename))
        res.status(400).send({ error: e })
    }
})

// PUT Contact 
app.put("/:id", upload.single('img'), async (req, res) => {
    try {
        const id = req.params.id

        let contactJSON = getJSON(__dirname + "/contact.json")
        const contacts = JSON.parse(contactJSON)

        const index = contacts.findIndex((contact) => {
            return contact.id == id
        })

        if (index < 0) {
            return res.json({ error: false, message: "Ce contact n'existe pas" })
        }

        const contact = contacts.splice(index, 1)[0]

        contact.nom = req.body.firstname ? req.body.firstname : contact.nom
        contact.prenom = req.body.lastname ? req.body.lastname : contact.prenom
        contact.telephone = req.body.phone ? req.body.phone : contact.telephone
        contact.email = req.body.email ? req.body.email : contact.email
        contact.dateNaissance = req.body.birthdate ? new Date(req.body.birthdate).toISOString() : contact.dateNaissance

        if (req.file) {
            try {
                fs.unlinkSync(path.join(__dirname, '../public/img/', contact.avatar));
                contact.avatar = req.file.filename
            } catch (e) {
                return res.json({ error: e })
            }
        }
        contact.modified = new Date().toISOString()
        contacts.push(contact)

        contactJSON = JSON.stringify(contacts)
        fs.writeFileSync(__dirname + "/contact.json", contactJSON)
        return res.json({ error: false, contact: contact })
    }
    catch (e) {
        if (res.file) {
            fs.unlinkSync(path.join(__dirname, '../public/img/', res.file.filename));
        }
        res.status(400).send({ error: e })
    }
})

// DELETE Contact
app.delete("/:id", (req, res) => {
    try {
        const id = req.params.id

        let contactJSON = getJSON(__dirname + "/contact.json")
        const contacts = JSON.parse(contactJSON)

        const index = contacts.findIndex((contact) => {
            return contact.id == id
        })

        const contact = contacts.splice(index, 1)[0]

        contactJSON = JSON.stringify(contacts)
        fs.writeFileSync(__dirname + "/contact.json", contactJSON)
        fs.unlinkSync(path.join(__dirname, '../public/img/', contact.avatar));

        return res.json({ error: false, contact: { contact } })
    } catch (e) {
        res.json({ error: e })
    }
})

app.listen(port, () => { })