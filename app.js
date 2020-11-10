var button = document.querySelector('.button');
var inputValue = document.getElementById("inputValue");
var temp = document.getElementById("temp");
var uvIndex = document.getElementById("uvIndex");
var windStatus = document.getElementById("windStatus");
var sunrise = document.getElementById("sunrise");
var sunset = document.getElementById("sunset");
var visibility = document.getElementById("visibility");
var iconCode = document.getElementById("wicon");
var humidity = document.getElementById("humidity");
var dewPoint = document.getElementById("dewPoint");
var tempMax1 = document.getElementById("tempMax1");
var tempMin1 = document.getElementById("tempMin1");
var tempMax2 = document.getElementById("tempMax2");
var tempMin2 = document.getElementById("tempMin2");
var tempMax3 = document.getElementById("tempMax3");
var tempMin3 = document.getElementById("tempMin3");
var tempMax4 = document.getElementById("tempMax4");
var tempMin4 = document.getElementById("tempMin4");
var tempMax5 = document.getElementById("tempMax5");
var tempMin5 = document.getElementById("tempMin5");
var tempMax6 = document.getElementById("tempMax6");
var tempMin6 = document.getElementById("tempMin6");
var tempMax7 = document.getElementById("tempMax7");
var tempMin7 = document.getElementById("tempMin7");
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");
var icon7 = document.getElementById("icon7");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var day6 = document.getElementById("day6");
var day7 = document.getElementById("day7");
var currentDate = document.getElementById("currentDate");
var currentTime = document.getElementById("currentTime");

window.addEventListener("load", () => {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            button.addEventListener('click', function () {


                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=2f12d38a973a1e810a9745849250b6ff&units=imperial`)
                        .then(response => response.json())
                        //.then(data => console.log(data))
                        .then(data => {

                            var tempValue = data['current']['temp'];
                            var uvIndexValue = data['current']['uvi'];
                            var windStatusValue = data['current']['wind_speed'];
                            var sunriseValue = data['current']['sunrise'];
                            var sunsetValue = data['current']['sunset'];
                            var visiblityValue = data['current']['visibility'];
                            var humidityValue = data['current']['humidity'];
                            var dewPointValue = data['current']['dew_point'];
                            var iconCodeValue = data['current']['weather'][0]['icon'];
                            var currentDateValue = `${new Date().toLocaleString('en-us', {  weekday: 'long' })}`;



                            temp.innerHTML = `${Math.round(tempValue)}°<span>F</span>`;
                            currentTime.innerHTML=`${new Date().toLocaleTimeString("en-US")}`
                            uvIndex.innerHTML = `<p>UV Index</p>${uvIndexValue}`;
                            windStatus.innerHTML = `<p>Wind Speed</p>${windStatusValue}<span>mp/h</span>`;
                            sunrise.innerHTML = `<p>Sunrise & Sunset</p> ${new Date(sunriseValue).toLocaleTimeString("en-US")} `;
                            sunset.innerHTML = `${new Date(sunsetValue).toLocaleTimeString("en-US")}`;
                            visibility.innerHTML = `<p>Visibility</p>${Math.round(visiblityValue *0.000621371192).toFixed(2)} mi`;
                            iconCode.src = `http://openweathermap.org/img/wn/${iconCodeValue}@2x.png`;
                            humidity.innerHTML = `<p>Humidity</p>${humidityValue}%`;
                            dewPoint.innerHTML = `<p>Dew Point</p>${dewPointValue}%`;
                            currentDate.innerHTML = `${currentDateValue}<span>,</span>`;


                        })
                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=2f12d38a973a1e810a9745849250b6ff&units=imperial`)
                        .then(response => response.json())
                        //.then(data=> console.log(data))
                        .then(data => {

                            var current = new Date()
                            var tempMax1Value = data['daily'][1]['temp']['max'];
                            var tempMin1Value = data['daily'][1]['temp']['min'];
                            var icon1Value = data['daily'][1]['weather'][0]['icon'];
                            var tempMax2Value = data['daily'][2]['temp']['max'];
                            var tempMin2Value = data['daily'][2]['temp']['min'];
                            var icon2Value = data['daily'][2]['weather'][0]['icon'];
                            var tempMax3Value = data['daily'][3]['temp']['max'];
                            var tempMin3Value = data['daily'][3]['temp']['min'];
                            var icon3Value = data['daily'][3]['weather'][0]['icon'];
                            var tempMax4Value = data['daily'][4]['temp']['max'];
                            var tempMin4Value = data['daily'][4]['temp']['min'];
                            var icon4Value = data['daily'][4]['weather'][0]['icon'];
                            var tempMax5Value = data['daily'][5]['temp']['max'];
                            var tempMin5Value = data['daily'][5]['temp']['min'];
                            var icon5Value = data['daily'][5]['weather'][0]['icon'];
                            var tempMax6Value = data['daily'][6]['temp']['max'];
                            var tempMin6Value = data['daily'][6]['temp']['min'];
                            var icon6Value = data['daily'][6]['weather'][0]['icon'];
                            var day1Value = `${new Date(current.getTime() + 86400000).toLocaleDateString('en-us', {  weekday: 'long' })}`;
                            var day2Value = `${new Date(current.getTime() + 172800000).toLocaleDateString('en-us', {  weekday: 'long' })}`;
                            var day3Value = `${new Date(current.getTime() + 259200000).toLocaleDateString('en-us', {  weekday: 'long' })}`;
                            var day4Value = `${new Date(current.getTime() + 345600000).toLocaleDateString('en-us', {  weekday: 'long' })}`;
                            var day5Value = `${new Date(current.getTime() + 432000000).toLocaleDateString('en-us', {  weekday: 'long' })}`;
                            var day6Value = `${new Date(current.getTime() + 518400000).toLocaleDateString('en-us', {  weekday: 'long' })}`;
                            



                            tempMax1.innerHTML = `${Math.round(tempMax1Value)}/`;
                            tempMin1.innerHTML = `${Math.round(tempMin1Value)}`;
                            icon1.src = `http://openweathermap.org/img/wn/${icon1Value}@2x.png`;
                            day1.innerHTML = day1Value;
                            tempMax2.innerHTML = `${Math.round(tempMax2Value)}/`;
                            tempMin2.innerHTML = `${Math.round(tempMin2Value)}`;
                            icon2.src = `http://openweathermap.org/img/wn/${icon2Value}@2x.png`;
                            day2.innerHTML = day2Value;
                            tempMax3.innerHTML = `${Math.round(tempMax3Value)}/`;
                            tempMin3.innerHTML = `${Math.round(tempMin3Value)}`;
                            icon3.src = `http://openweathermap.org/img/wn/${icon3Value}@2x.png`;
                            day3.innerHTML = day3Value;
                            tempMax4.innerHTML = `${Math.round(tempMax4Value)}/`;
                            tempMin4.innerHTML = `${Math.round(tempMin4Value)}`;
                            icon4.src = `http://openweathermap.org/img/wn/${icon4Value}@2x.png`;
                            day4.innerHTML = day4Value;
                            tempMax5.innerHTML = `${Math.round(tempMax5Value)}/`;
                            tempMin5.innerHTML = `${Math.round(tempMin5Value)}`;
                            icon5.src = `http://openweathermap.org/img/wn/${icon5Value}@2x.png`;
                            day5.innerHTML = day5Value;
                            tempMax6.innerHTML = `${Math.round(tempMax6Value)}/`;
                            tempMin6.innerHTML = `${Math.round(tempMin6Value)}`;
                            icon6.src = `http://openweathermap.org/img/wn/${icon6Value}@2x.png`;
                            day6.innerHTML = day6Value;
                            


                        })


                })





                .catch(err => alert("Please enter vailid city"))

        })

    }
})