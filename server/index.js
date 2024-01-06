const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// Set up a catch-all route to serve the "index.html" for any route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

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
