/*window.onload = function popup() {
new Date().getDay() === 5 ? document.getElementById('pancakebanner').innerhtml= 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.': null;
console.log(new Date().getDay());
console.log('pancakebanner')}*/

function pancakes(){
    var weekday = new Date().getDay();

    if (weekday === 5) {
        document.getElementById("pancakes").innerhtml = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    }
};
