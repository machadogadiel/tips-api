export class TipsDAO {
    constructor(database) {
        this.database = database
    }

    getRandomTip() {
        return new Promise((resolve, reject) => {
            this.database.all('SELECT DISTINCT * FROM TIPS', (error, rows) => {
                if (error) {
                    reject(error)
                }

                resolve(rows[Math.floor(Math.random() * rows.length)])
            })
        })
    }

    addTip(tip) {
        return new Promise((resolve, reject) => {
            const INSERT_NEW_DATA = "INSERT INTO TIPS (NAME, LINK) VALUES (?, ?)"

            this.database.run(INSERT_NEW_DATA, [tip.name, tip.link], (error) => {
                if (error) {
                    reject(error)
                }

                resolve({
                    "Successfully added tip": tip
                })
            })
        })
    }

    removeTip(tip) {
        return new Promise((resolve, reject) => {
            const DELETE_DATA = `DELETE FROM TIPS WHERE ID = ${tip.id}`

            this.database.run(DELETE_DATA, (error) => {
                if (error) {
                    reject(error)
                }

                resolve({
                    "Successfully removed tip": tip
                })
            })
        })
    }
}