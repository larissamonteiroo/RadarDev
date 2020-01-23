const { Router } = require('express');

const routes = Router();

routes.get('/', function(req,res){
    res.json({ message: 'Hello Lari'})
})

module.exports = routes;