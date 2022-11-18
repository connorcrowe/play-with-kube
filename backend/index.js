const express = require('express')

const port = process.env['APP_PORT'] || 3000;
const app = express();

app.use(express.static('frontend'))

app.get('/api/status', (req, res)=>{
  res.sendStatus(200);
});
  
app.get('/api/hello', (req, res)=>{
  res.send("🤭 Ooooooooooooops!");
});``

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});