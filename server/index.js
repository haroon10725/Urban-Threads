const express = require('express');
const { json } = require('react-router-dom');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')


app.use(express.static('build'));
// app.use(bodyParser)
// For Product Overview Page
app.get('/data/overview/fetch', async (_req, res, _next) => {
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

// For products Page
// app.get('/data/product/fetch', async (_req, res, _next) => {
//   const apiKey = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';
//   const url = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action/find';
//   const data = {
//     dataSource: 'Cluster0',
//     database: 'UrbanThreadsDB',
//     collection: 'Products',
//     filter: { name: { $in: ['men', 'boys'] } }
//   }

//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'apiKey': apiKey
//   };

//   fetch(url, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(data)
//   }).then(async response => {
//     res.send(await response.json());
//   }).then(async result => {
//     console.log('API Response:', result);
//   }).catch(async error => {
//     console.error('Fetch error:', error);
//   });
// });


// Handle POST requests at /api/data
app.post('/api/data', (req, res) => {
  const postData = req.body;

  // Process the data as needed
  console.log('Received data:', postData);

  // Send a response (optional)
  res.json({ message: 'Data received successfully!' });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
