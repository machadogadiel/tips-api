import { TipModel } from "../models/TipModel.js"
import { getRandom } from "../models/TipModel.js"
import { insertNewTip } from "../models/TipModel.js"

export const tips = (app, db) => {
    app.get("/tips", (req, res) => {
        getRandom(db)
         .then(rows => res.send(rows[[Math.floor(Math.random() * rows.length)]]))
         .catch(err => res.send({
            "error": err.message
         }))
    })

    app.post("/tips/create", (req, res) => {
        const body = req.body
        const newTip = new TipModel(body.NAME, body.LINK)

        insertNewTip(db, newTip)

        res.send(body)
    })
}