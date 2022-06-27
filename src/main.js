import chalk from 'chalk';
import express from 'express';
import { db } from './infra/db.js';
import { tips } from './controllers/TipsController.js';

const app = express()
const port = 3000
const address = `http://localhost:${port}`

app.use(express.json())

tips(app, db)

app.listen(port, () => {
    const msg = `Listening to ${address}`

    console.log(chalk.cyan(msg))
})