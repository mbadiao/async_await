async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const data = await Promise.all(responses.map((response) => response.json()));
      console.log(data); // tableau contenant tootes les donnees des  liens 
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
  parallelCalls(urls); // fait un parralels Call API et affiche le resultat
  