import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.ANALYTICS_DB_URI,
    {
        maxPoolSize: 50,
        writeConcern:250,
        useNewUrlParser:true
    }
).catch(err=>{
    console.log(`worked well here`)
    console.error(err.stack)
    process.exit(1)
}).then(async client=>{
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    }) 
})

//where does port come from