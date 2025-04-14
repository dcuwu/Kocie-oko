const express = require('express');
const app = express();
const path = require('path');

// Obsługuje pliki statyczne w katalogu 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Serwer działa na http://localhost:3000/');
});
