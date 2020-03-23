console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const textOne = document.querySelector('#message-1')
const textTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    textOne.textContent="Loading..."
    textTwo.textContent=""

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                textOne.textContent=data.error
            } else {
                textOne.textContent=data.location
                textTwo.textContent=data.forecast
            }
        })
    })
})