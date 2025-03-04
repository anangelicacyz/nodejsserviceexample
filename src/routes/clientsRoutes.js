import express from 'express';
const route = express.Router()
import clientController from '../controllers/clientsController.js' 


route.get('/', clientController.getAll)
route.get('/:id', clientController.getById)
route.post('/', clientController.create)
route.put('/:id', clientController.update)
route.delete('/:id', clientController.delete)

export default route;
