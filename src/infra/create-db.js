import * as sqlite3 from 'sqlite3'

export const db = new sqlite3.default.Database('./src/infra/data/database.db');

const TIPS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TIPS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(120),
    "LINK" varchar(120)
  );`;

const ADD_TIPS_DATA = `
INSERT INTO TIPS (NAME, LINK)
VALUES 
    ('Tip #1', 'https://tips.dev/category/javascript/1'),
    ('Tip #2', 'https://tips.dev/category/javascript/2'),
    ('Tip #3', 'https://tips.dev/category/javascript/3'),
    ('Tip #4', 'https://tips.dev/category/javascript/4'),
    ('Tip #5', 'https://tips.dev/category/javascript/5'),
    ('Tip #6', 'https://tips.dev/category/javascript/6'),
    ('Tip #7', 'https://tips.dev/category/javascript/7'),
    ('Tip #8', 'https://tips.dev/category/javascript/8')
`

function createTipsSchema() {
    db.run(TIPS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populateTipsSchema() {
    db.run(ADD_TIPS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}

db.serialize(() => {
    createTipsSchema();
    populateTipsSchema();
})
