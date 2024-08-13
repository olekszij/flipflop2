const express = require('express');
const app = express();
const path = require('path');

// Указываем Express использовать каталог текущего расположения для статических файлов
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  // Отправляем файл index.html при обращении к корню сайта
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3020, () => {
  console.log('Server is running on port 3020');
});

