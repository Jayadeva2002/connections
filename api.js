import express from "express";
import Rathna from "./class.js";

const ome_one = new Rathna()
const app = express()

app.use(express.json()) 

app.post('/data', ome_one.create)
app.get('/data/list', ome_one.list)
app.post('/data/update/:id', ome_one.update)
app.delete('/data/delete/:id', ome_one.delete)
app.get('/data/view/:id', ome_one.view)


app.listen(9999, ()=>[
    console.log("Server is runnig at 9999") 
])



