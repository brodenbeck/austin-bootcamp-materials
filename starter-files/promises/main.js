const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://api.icndb.com/jokes/random');
  request.onload = () => {
    if (request.status === 200) resolve(request.response);
    else reject(Error(request.statusText));
  };

  request.onerror = () => reject(Error('Error fetching data.'));

  request.send();
});

// add consumers here
