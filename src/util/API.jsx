import axios from 'axios';

const apiKey = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';

const fetchData = async () => {
  try {
    const requestData = {
      dataSource: 'Cluster0',
      database: 'UrbanThreadsDB',
      collection: 'Products/Men'
    };

    const response = await axios.post('https://data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action/findOne', requestData, {
      headers: {
        'apiKey': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default fetchData;
