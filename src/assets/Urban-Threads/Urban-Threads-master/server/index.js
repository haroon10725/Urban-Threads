const express = require('express');
const { json } = require('react-router-dom');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.static('build'));

const API_KEY = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';
const BASE_URL = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action';

// For Product Overview Page
app.get('/api/products/:category?/:subCategory?/:productUUID?', async (req, res, _next) => {
  const category = req.params['category']
  const subCategory = req.params['subCategory']
  const productUUID = req.params['productUUID']

  const url = `${BASE_URL}/find`;

  const filters = {}

  if (category != undefined) {
    filters['category'] = category.toLowerCase()
  }

  if (subCategory != undefined) {
    filters['sub_category'] = subCategory.toLowerCase()
  }

  if (productUUID != undefined) {
    filters['unique_identifier'] = productUUID.toUpperCase()
  }

  const data = {
    dataSource: 'Cluster0',
    database: 'UrbanThreadsDB',
    collection: 'Products',
    filter: filters
  };

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'apiKey': API_KEY
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  }).then(async response => {
    const data = await response.json();
    res.send(data);
  }).then(async result => {
    console.log('API Response:', result);
  }).catch(async error => {
    console.error('Fetch error:', error);
  });
});

// For products Page
app.get('/data/product/fetch', async (_req, res, _next) => {
  const apiKey = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';
  const url = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action/find';
  const data = {
    dataSource: 'Cluster0',
    database: 'UrbanThreadsDB',
    collection: 'Products',
    filter: { name: { $in: ['men', 'boys'] } }
  }

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
