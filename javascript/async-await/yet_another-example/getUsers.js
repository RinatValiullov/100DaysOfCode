let fetch = require('node-fetch');

const delay = ms =>
  new Promise(res => setTimeout(() => res(), ms));

const url = 'https://jsonplaceholder.typicode.com/users5';

const getUsersAsync = async () => {
  console.log('Staring fetching data...');
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('finally');
  }
};

getUsersAsync();
