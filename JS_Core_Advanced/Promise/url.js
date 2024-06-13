function fetchUrlContents(urls) {
    const promises = urls.map(url => {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.text())
          .then(content => resolve({ url, content }))
          .catch(error => reject({ url, error }));
      });
    });
  
    return Promise.all(promises);
}

const urls = [
    'https://www.example.com',
    'https://www.google.com',
    'https://www.github.com'
  ];
  
  fetchUrlContents(urls)
    .then(results => {
      results.forEach(({ url, content }) => {
        console.log(`Content of ${url}:\n${content}`);
      });
    })
    .catch(errors => {
      errors.forEach(({ url, error }) => {
        console.error(`Error fetching ${url}: ${error}`);
      });
    });