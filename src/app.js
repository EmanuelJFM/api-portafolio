const express = require('express');
const cors = require('cors'); // Importa el módulo cors
const routes = require('./routes/routes');

const app = express();
const corsOptions = {
    origin: 'https://portafolio-4b054.web.app',
    optionsSuccessStatus: 200
}

app.use('/contact/send-email', cors(corsOptions), function(req, res, next){
    console.log('CORS habilitado para /contact/send-email'); 
    next(); 
});

app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
