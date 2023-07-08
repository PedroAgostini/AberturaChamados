const express = require('express');
const app = express();

app.use(express.static('chamados'));

const PORT = 3000; // Porta em que o servidor irá rodar
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
