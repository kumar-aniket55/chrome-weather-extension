const city=document.querySelector(".one");
const temp1=document.querySelector(".two");
const humid=document.querySelector(".three");
const cloud=document.querySelector(".five");
const wind=document.querySelector(".six");
const main=document.querySelector(".loader");
const img=document.querySelector(".four");
const sucess = (position)=>{
   

fetch("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid="+"b6a854ff005733828b2660df88b2a749")
.then(data=>data.json())
.then(temp=>{
 main.remove();
 city.classList.add("desc")
 temp1.classList.add("desc")
 humid.classList.add("desc")
 cloud.classList.add("desc")
 wind.classList.add("desc")
 const src=temp.weather[0].icon;
 var image = document.createElement('img');
 image.classList.add("mystyle");
image.setAttribute("src","http://openweathermap.org/img/wn/"+src+"@2x.png");
temp1.append(image);
city.innerHTML="CITY: " + temp.name.toUpperCase();    
temp1.innerHTML+="<br>"+"TEMP: " + (temp.main.temp-273.15).toFixed(2)+"°C " +  temp.weather[0].description.toUpperCase();
humid.innerHTML="HUMIDITY: " + temp.main.humidity+"%";
cloud.innerHTML="CLOUD: " + temp.clouds.all+"%";
wind.innerHTML="WIND:" + ((temp.wind.speed)*3.6).toFixed(2)+" KM/H";
})
}
const error = (e)=>{
console.log(e);
}
console.log("hello")
navigator.geolocation.getCurrentPosition(sucess,error);

