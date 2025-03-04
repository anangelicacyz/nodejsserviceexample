import 'dotenv/config'
import express from 'express'
const app = express();
import routesClients from './src/routes/clientsRoutes.js'

app.use(express.json())
app.use('/clients', routesClients)

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Running in ${PORT}`))
}catch(e){
    console.log(e)
}