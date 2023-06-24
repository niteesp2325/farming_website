const express=require("express");
const path=require("path");

//start mongoose
const mongoose = require('mongoose');

const bodyparser=require("body-parser")
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const app=express();
const port=5000;

//define mongoose schema
var contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    addres: String,
    desc: String,
  });
  var contact = mongoose.model('contact', contactschema);

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine','pug')//set the templet engine as 
app.set('views',path.join(__dirname,'views'))//set the viwes directry
  
//ENDPOINTS
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params);
})



//Body-parser is the Node.js body-parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.
//npm install body-parser
/*app.post('/contact',(req,res)=>{
   var myData=new contact(req.body);
   //for promiss
   myData.save().then(()=>{
   res.send("this item has been saved to the database")
}).catch(()=>
{
  res.status(400).send("item was not saved to the database")
});
   // res.status(200).render('index.pug');
})
*/


//START THE SERVER

app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
})
