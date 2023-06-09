const form = document.querySelector('form')
form.addEventListener("submit" , convertFahrToCelcius)

function convertFahrToCelcius(event) {
    event.preventDefault() //stop from refresh
    const far = Number(event.target.far.value) //get from the value 
    const celcius = (far - 32) * 5/9 
    document.querySelector('h2').innerText =
    far.toFixed(2) + "° Degrees Fahrenheit " + " is " + celcius.toFixed(2) + "° in Degrees Celcius "
}
