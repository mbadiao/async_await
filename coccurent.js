async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
      ]);
      const data1 = await response1.json();
      const data2 = await response2.json();
      console.log("Data 1:", data1);
      console.log("Data 2:", data2);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  concurrentRequests(); // Fait un  concurrent API calls et affiche les resultats combines
  