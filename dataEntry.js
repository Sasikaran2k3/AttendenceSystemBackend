const{MongoClient}= require("mongodb");
require("dotenv").config()

const data = async()=>
{
const pointer = new MongoClient(process.env.URL);
await pointer.connect();
const col = await pointer.db("StudentList").collection("StudenstData");
await col.insertMany();
}
console.log("Starting");
data();
console.log("Written");
