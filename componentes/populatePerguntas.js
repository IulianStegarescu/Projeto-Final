import  getMongoCollection  from "../mongo"

 async function populate_Baralho_Perguntas() {
     const collection = await getMongoCollection("Baralho_Perguntas")
     collection.insertMany(
         
     )
 }
 export default populate_Baralho_Perguntas