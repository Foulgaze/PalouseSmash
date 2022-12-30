import express from "express";
import process from "process";
import path from 'path';
import {fileURLToPath} from 'url';

const app = express()
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToStatic = `${__dirname}/../staticFiles`;


app.use(express.static(pathToStatic));

app.use(express.static(pathToStatic, {
  extensions: ['html', 'htm']
}));

app.get('/', (req, res) =>{
    res.send("{}");
})

app.get('/rankings', (req, res) => {
    res.sendFile(`${__dirname}/staticFiles/rankings.html`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(function (req, res, next) {
    res.status(404).send("Invalid Url")
  });