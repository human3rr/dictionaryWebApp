const express = require('express')
const cors = require('cors')
const {connectToDb, getDb} = require('./db.js')

const app = express()

let db
const PORT = process.env.PORT || 3000;

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));
  


connectToDb( (err) => {
    if(!err){
        app.listen(PORT, () => {
            console.log(`listening for stuff on port ${PORT}`)
        })
        db = getDb()
    }
})

//db.products.aggregate([{$sample: {size: 10}}]);

app.get('/dictionary', (req, res) =>{
    let dicts = []
    db.collection('dictations')
    .find().forEach(dict => {
        dicts.push(dict)
    }).then(() => {
        res.status(200).json(dicts)
    }).catch(() =>{
        res.status(500).json({error: "error bitch"})
    })
})

app.get('/dictionary/random', async (req, res) =>{
    let [dicts] = await db.collection('dictations').aggregate([{ $sample: { size: 1 } }]).toArray()
    try{
        res.status(200).json(dicts)
    }    
    catch{
        res.status(500).json({error: "error bitch"})
    }
})

app.get('/dictionary/search/:id', async (req, res) =>{
    let dicts = await db.collection('dictations').findOne({"word": req.params.id.toLowerCase()})
    try{
        res.status(200).json(dicts)
    }    
    catch{
        res.status(500).json({error: "error bitch"})
    }
})
