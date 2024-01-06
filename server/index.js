const express = require('express');
const cookieParser = require('cookie-parser');
const { json } = require('react-router-dom');
const app = express();
const port = 3000;


app.use(express.static('build'));
app.use(cookieParser());

// cart details to be used here
const cartDetails = "Details";

app.get('/cookie', function (req, res) {
  res.cookie("cart", cartDetails);
  res.send(req.cookies);
});


app.get('/data/fetch', async (_req, res, _next) => {
  const apiKey = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';
  const url = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action/find';
  const data = {
    dataSource: 'Cluster0',
    database: 'UrbanThreadsDB',
    collection: 'Products',
    filter: { name: 'men' }
  };

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'apiKey': apiKey
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  }).then(async response => {
    res.send(await response.json());
  }).then(async result => {
    console.log('API Response:', result);
  }).catch(async error => {
    console.error('Fetch error:', error);
  });
});





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
