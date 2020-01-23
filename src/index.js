const express = require('express');
const routes = require('../app/routes/routes')

const app = express();

app.use(express.json())
app.use(routes);


app.listen(3000, () => {
    console.log('Rodando com Express')
});