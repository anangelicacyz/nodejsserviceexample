import express, { response } from 'express'
import  clients  from '../models/clients.js'

let lastId= 9

class clientController  {
    constructor() {

    }
    getAll (req, res) {
        try{
            res.status(201).json({data: clients})
        }catch(e){
            res.send(e)
        }
    }
    async create (req, res) {
        try{
            const data = clients
            const body = req.body

            if(!body.name || !body.email || !body.document){
                res.json({response: 'You can not sent empty data'}) 
            }else{
                const newClient = {
                    id: ++lastId,
                    ...body
                }
            data.push(newClient)
                //console.log(req.body)
                console.log(newClient)
                res.status(201).json({status: newClient})
            }
        }catch(e){
            res.send(e)
        }
    }
    async getById (req, res) {
        try{
            const id= Number(req.params.id)
            const data = clients
            const findClient = data.find(client => client.id === id)
            findClient? res.status(201).json({client: findClient}) : res.status(201).json({response: 'ID not found or invalid'})
        }catch(e){
            res.send(e).json({error: e})
        }
    }
    async update (req, res) {
        try{
            const id = Number(req.params.id)
            const data= clients
            const body = req.body
            const findClient = data.find(client => client.id === id)
            if(!findClient){
                return res.json({response: 'ID not found'})
            }
            clients[id] = {...findClient, ...body}
            
    
            res.status(201).json({status: clients})
        }catch(e){
            res.send(e).json({error: e})
        }
    }
    async delete (req, res) {
        try{
            const id = Number(req.params.id)
            const data = clients
            const findClient = data.findIndex(client => client.id === id)
          
            if(findClient === -1){
                return res.json({response: 'Not found'})
            }
            data.splice(findClient, 1)
            res.status(201).json({status: clients})
        }catch(e){
            res.send(e).json({response: e})
        }
    }
}

export default new clientController()