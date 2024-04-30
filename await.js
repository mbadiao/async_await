async function awaitCall() {
  const response = await fetch("https://api.example.com/data"); // Simulation d'un call API
  const data = await response.json();
  console.log(data);
}

awaitCall(); // fait un call api et afiche les donnees ou une erreur
