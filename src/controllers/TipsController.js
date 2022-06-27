import { TipModel } from "../models/TipModel.js"
import { TipsDAO } from "../dao/TipsDAO.js"

export const tips = (app, db) => {
    const dao = new TipsDAO(db)

    app.get("/tips", (req, res) => {
        dao.getRandomTip(db)
         .then(tip => res.send(tip))
         .catch(err => res.send({ "error": err.message }))
    })

    app.post("/tips/create", (req, res) => {
        const body = req.body
        const newTip = new TipModel(body.NAME, body.LINK)

        dao.addTip(newTip)
         .then(result => res.send(result))
         .catch(err => res.send({ "error": err.message }))
    })
}