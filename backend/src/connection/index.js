require('dotenv').config();

const app = require('./app');
const db = require('./db')

const PORT = process.env.PORT || 1000;

db.connect()
.then(()=> {
 app.listen(PORT, ()=>{
    console.log(`Server is Runnig on ${PORT}`)
 })
})
.catch((error)=>{
    console.log("Server Not Running",error);
});