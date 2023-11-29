let input = document.getElementById("cityinput");
let tempValue = document.getElementById("temp");
let description = document.getElementById("desc");
let cityName = document.getElementById("cityname");
let btn = document.getElementById("submit");
apikey = "ae73831443fa1f8daf2fed4cf629df2a";
let img = document.getElementById("tempImage");
let humidity = document.getElementById("hum");
let wind = document.getElementById("windspeed");
function convert(val){
    return (val - 273).toFixed(2);
}

btn.addEventListener('click',function()
{

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apikey)
    .then(res => res.json())

    .then(data =>{
        var temp = data['main']['temp'];
        var descr = data['weather'][0]['description'];
        var h = data['main']['humidity'];
        var ws = data['wind']['speed'];

        cityName.innerHTML = `Weather of ${input.value}`;
       tempValue.innerHTML = `${convert(temp)} &#8451;`;
       description.innerHTML = descr;   
       humidity.innerHTML = `Humidity: <span>${h}%</span>`;
       wind.innerHTML = `Wind Speed: <span>${ws}m/s</span>`;
       if(descr=="sunny"){
       img.src = 'weather/sunny.png';
       }
      else if(descr=="rainy")
        img.src='weather/rainy.jpg';
      
        else if(descr=="haze")
        img.src = "weather/haze.png";
        else 
        img.src="weather/weather.png";
    })
    .catch(err=>
        alert("Invalid city name"));

});

