function exponentCalc(event){
    event.preventDefault()
    const base = Number(event.target.base.value)
    const exponent = Number(event.target.exponent.value)
    document.querySelector('h2').innerHTML = base ** exponent
}

const form = document.querySelector('form')
form.addEventListener("submit",exponentCalc)