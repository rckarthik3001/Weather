let input = document.getElementById("cityinput");
let tempValue = document.getElementById("temp");
let description = document.getElementById("desc");
let cityName = document.getElementById("cityname");
let btn = document.getElementById("submit");
apikey = "ae73831443fa1f8daf2fed4cf629df2a";
let img = document.getElementById("tempImage");

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

        cityName.innerHTML = `Weather of ${input.value}`;
       tempValue.innerHTML = `${convert(temp)} C`;
       description.innerHTML = descr;   
       
       if(descr=="sunny"){
       img.src = './sunny.png';
       }
      else if(descr=="rainy")
        img.src='./rainy.png';
      
        else if(descr=="haze")
        img.src = "./haze.png";
        else 
        img.src="./weather.png";
    })
    .catch(err=>
        alert("Invalid city name"));

});

