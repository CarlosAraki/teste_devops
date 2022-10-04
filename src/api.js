// api básica em node 

const express = require('express');

const app = express();

const port = 3000; // sem env por enquanto

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Rota Principal!',
    version: '1.0.0',
  });
});

app.get('/secundaria', (req, res) => {
    array = ['log1','log2','log3']
    array.forEach(element => {
        console.log(element)
    });
    res.status(200).send({
      success: 'true',
      message: 'Rota secundaária!',
      version: '1.0.1',
    });
  });
  

app.listen(port);
console.log('Aplicação executando na porta ', port);