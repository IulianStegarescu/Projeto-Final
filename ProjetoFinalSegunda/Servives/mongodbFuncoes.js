// findbarlahobyid
import getMongoCollection from "./mongodb"
import { ObjectId } from "mongodb"
export async function CriarSala(data) {
    const collection = await getMongoCollection("ProjetoFinal", "Salas")
    const result = await collection.insertOne(data)
    return result.insertedId
  }


export async function EncontrarUmaSala(id) {
  const collection = await getMongoCollection("ProjetoFinal", "Salas")
  const result = await collection.findOne({_id: ObjectId(id)})
  return result
}