export class TipModel {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}

export function getRandom(database) {
    return new Promise((resolve, reject) => {
      database.all('SELECT DISTINCT * FROM TIPS', (err, rows) => {
        if (err) reject(err)
 
        resolve(rows)
      })
    })
}

export function insertNewTip(database, tip) {
    const INSERT_NEW_DATA = `
    INSERT INTO TIPS (NAME, LINK)
    VALUES 
    ("${tip.name}", "${tip.link}")`

    database.run(INSERT_NEW_DATA, (error) => {
        if (error) throw error
    })
}