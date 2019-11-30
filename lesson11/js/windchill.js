function windchill() {
    var temp = parseFloat(document.getElementById('hightemp').textContent);
    var windSpeed = parseFloat(document.getElementsById('windspeed').textContent);
    var result = windChill(temp, windSpeed);

    document.getElementById('windchill').textContent = result;
}

function windChill(tempF, speed) {
    var windchilltemp = "NaN"
    if (tempF <= 50 && speed > 3) {
        windchilltemp = 35.74 + (.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (.4275 * tempF * Math.pow(speed, .16));
    }
    return windchilltemp;

}