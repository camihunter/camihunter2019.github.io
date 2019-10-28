function windchill() {
    var temp = document.getElementById('hightemp').value);
    var windSpeed= document.getElementsByClassName('windspeed').value);
    var result= windChill(temp, windSpeed);

    document.getElementById('windchill').innerHTML = result;
}

function windChill(tempF, speed) {
    var windChillTemp=35.74+ (.6215*tempF)-(35.75*Math.pow(speed, .16))+ (.4275*tempF*Math.pow(speed,.16));

    return windChillTemp;
}