const{MongoClient}= require("mongodb");
require("dotenv").config()

const interact = async(query) =>
{
    console.log("query:"+JSON.stringify(query));
    const pointer = new MongoClient(process.env.URL);
    await pointer.connect();
    const col = await pointer.db("StudentList").collection("StudentData");
    const data =  await col.findOne(query); 
    console.log("Inner"+JSON.stringify(data));
    return data;
};
module.exports = {interact}