//console.log("Hello Word")

//const express = require('express')
import express from "express";
import ejs from "ejs";
import { dirname, join } from 'path'
import { fileURLToPath } from "url";

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

//app.get('/', (req, res) => res.send('hello world'))
// se cambia a carpeta routes
/*
app.get('/', (req, res) => res.render('index.ejs'))
app.get('/about', (req, res) => res.render('about.ejs'))
app.get('/contact', (req, res) => res.render('contact.ejs'))
*/

// se quita de navigations
/*
<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
</nav>
*/

app.listen(3000)
console.log('Server is listening on port 3000')




// package.jsaon scripts: "test": "echo \"Error: no test specified\" && exit 1"