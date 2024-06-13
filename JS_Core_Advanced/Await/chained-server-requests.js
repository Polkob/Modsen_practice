async function fetchDataAndMakeRequest(url1, url2) {
    try {
      const response1 = await fetch(url1);
      const data1 = await response1.json();
  
      const response2 = await fetch(`${url2}?id=${data1.id}`);
      const data2 = await response2.json();
  
      console.log('Data from first server:', data1);
      console.log('Data from second server:', data2);
  
      return { data1, data2 };
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}
