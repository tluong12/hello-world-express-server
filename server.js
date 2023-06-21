import express from 'express';
const app = express();
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  console.log('reponse from DL computer: ' + req.ip);  
  res.send('reponse from DL computer: ' + req.ip)
 // res.send('Hello WEB322!');
});
// 192.168.189.1:3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
