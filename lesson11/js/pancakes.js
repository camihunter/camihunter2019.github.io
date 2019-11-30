/*window.onload = function popup() {
new Date().getDay() === 5 ? document.getElementById('pancakebanner').innerhtml= 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.': null;
console.log(new Date().getDay());
console.log('pancakebanner')}*/

function popup() {
    var banner;
    if (new Date().getDay() == 3) {
        banner = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";}
        document.getElementById('pancakebanner').innerhtml= banner;
         
    console.log(new Date().getDay());
    console.log(banner);
    };