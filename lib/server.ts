import { Application, RequestHandler } from 'express';
import main from './app'

const PORT: Number = 3000
const app: Application = main()

app.listen(PORT, (): void => {
    console.log(`Running server on port ${PORT}`)
})

app.get('/', function(req, res) {
    res.send("Servidor rodando!")
})