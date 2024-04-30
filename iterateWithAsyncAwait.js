async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay de 1 second
    }
  }
  
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values); // affiche apres 1 second