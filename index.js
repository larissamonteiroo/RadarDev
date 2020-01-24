const express = require('express');
const mongoose = require('mongoose')
const routes = require('./src/app/routes/routes')

const app = express();

mongoose.connect('mongodb+srv://Radardev:<1234>@cluster0-lux7d.mongodb.net/radar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes);


app.listen(3000, () => {
    console.log('Rodando com Express')
});