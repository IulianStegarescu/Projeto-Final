import ObterSala from "../../Servives/mongodbFuncoes"
export default async function (req, res) {
    if (req.method === "GET") {
     const result = await ObterSala(req.body)
    res.status(202).json(result)
    }

}