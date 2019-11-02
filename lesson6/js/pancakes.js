const pancakes = new Date().getDay() === 6 ? "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion." : NaN;

document.getElementById('pancakebanner').innerhtml = pancakes;