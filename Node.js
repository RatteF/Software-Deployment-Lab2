const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(getResponse());
});

app.listen(port, () => {
  console.log(`Die Anwendung ist auf Port ${port} gestartet.`);
});

function getResponse() {
  return 'Hallo, wenn diese Nachricht kommt, hat der Test funktioniert.';
}
