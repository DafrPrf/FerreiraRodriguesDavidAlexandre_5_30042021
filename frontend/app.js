const getData = async () => {
  const response = await fetch('http://localhost:3000/api/cameras');

  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  return data;
};

getData()
  .then((data) => {
    console.log('resolved: ', data);
    updateCard(data);
  })
  .catch((err) => {
    console.log('rejected:', err.message);
  });
