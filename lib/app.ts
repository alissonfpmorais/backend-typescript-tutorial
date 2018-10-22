import * as express from 'express'
import * as bodyParser from 'body-parser'

export default function () {
    const app: express.Application = express.default()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    return app
}