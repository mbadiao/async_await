async function awaitCall() {
    try { // on verifie les potentiels ereurs
      const response = await fetch('https://api.example.com/data'); // Simulation d'un call API 
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  awaitCall(); // fait un call api et afiche les donnees ou une erreur
  