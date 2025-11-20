fetch("https://api.openweathermap.org/data/2.5/weather?q=agadir&cnt=1&appid=248245d8eb30ddd272396d1f1ea6ea9a")
 .then(response =>response.json())
 .then(data => {
   
})
   .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  });