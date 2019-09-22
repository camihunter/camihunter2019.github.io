const options = {
    year: 'long'
};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', options);
const todaysdate = new Date();