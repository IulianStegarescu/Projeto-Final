import {CriarSala} from "../../Servives/mongodbFuncoes"
export default async function (req, res) {
    if (req.method === "POST") {
     const result = await CriarSala(req.body)
    res.status(202).json({_id: result})
    }

}