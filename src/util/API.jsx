const apiKey = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';

const fetchData = async () => {

  const url = 'http://localhost:3000/';
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
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result => {
      // Handle the result from the API
      console.log('API Response:', result);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });


  // try {
  //   const requestData = {
  //     dataSource: 'Cluster0',
  //     database: 'UrbanThreadsDB',
  //     collection: 'Products/Men'
  //   };

  //   const response = await fetch('https://data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action/findOne', requestData, {
  //     headers: {
  //       'apiKey': apiKey,
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   });
  //   console.log('Response:', response.data);
  // } catch (error) {
  //   console.error('Error:', error);
  // }
};

export default fetchData;
