function convertYenToUSD(event) {
    event.preventDefault()
    const yen = Number(event.target.yen.value)
    const usd = .0072 * yen
    document.querySelector('h2').innerText =
    yen + " yen is " + usd.toFixed(2) + "USD"

}

const form = document.querySelector('form')
form.addEventListener("submit",convertYenToUSD)