// script.js
fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log("body :" + " " + data.body);
    
  })
  .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  });