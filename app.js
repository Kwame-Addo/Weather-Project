const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){

const url = "https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=aab1dfe1303685e1900d0e4db136d0e3&units=metric";

https.get(url, function(response){
  console.log(response.statuscode);

  response.on("data", function(data){
  const weatherData =  JSON.parse(data)
  const temp = weatherData.main.temp
  const description = weatherData.weather[0].description
  const icon = weatherData.weather[0].icon
  const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

  res.write("<p>The weather is currently " + description + "<P>");
  res.write("<h1>The Temperature in Accra is " + temp + " degrees Celcius</h1>");
  res.write("<img src=" + imageURL + ">");
  res.send()
  })
})

})

app.listen(3000, function(){
  console.log("Server is running on port 3000.")
})
