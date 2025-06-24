

let apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&appid=9b254d5ed1a8476d4e2417bdbd358fa7'
window.onload=function(){
      document.getElementById('rest').style.visibility='hidden'

     
      document.getElementById('card').style.height='10%'
      
}
let errorMsg = document.getElementById('error');
async function checkweather(){
      try{
            
      let city=document.getElementById('in').value.trim()
      let response=await axios.get(apiurl+'&q='+city)
      let koko=response.data.main.humidity
      let zozo=response.data.wind.speed
      let bosy=response.data.main.temp
      let image=document.createElement('img')
      let weatherStatus = response.data.weather[0].main.toLowerCase();

      let oldImg = document.querySelector("#here img");
      if (oldImg) {
      oldImg.remove();
      }
      if (weatherStatus === "clear") {
        image.src = "clear.png";
        } else if (weatherStatus === "clouds") {
        image.src = "clouds.png";
        } else if (weatherStatus === "rain") {
        image.src = "rain.png";
        } else if (weatherStatus === "snow") {
        image.src = "snow.png";
        } else if (weatherStatus === "mist") {
        image.src = "mist.png";
        } 
      document.getElementById("here").appendChild(image);
      document.getElementById('city').textContent=response.data.name
      document.getElementById('hud').textContent=`${koko+'%'}`
      document.getElementById('wwe').textContent=`${zozo+'km/hr'}`
      document.getElementById('temp').textContent=`${bosy+'°C'}`
      document.getElementById('rest').style.visibility='visible'
      document.getElementById('card').style.height='fit-content'
      const card = document.getElementById('card');
      card.style.height = 'fit-content';
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
      
} catch{
    let input = document.getElementById('in');
    input.value = ''; // يمسح اللي المستخدم كتبه
    input.placeholder = '⚠️ invalid city name';
    input.classList.add('error-input');
    document.getElementById('rest').style.visibility = 'hidden';
    document.getElementById('card').style.height = '10%';
}
}
document.getElementById('btn').addEventListener('click',function(){
 checkweather()
})

document.getElementById('in').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    checkweather();
  }
});
