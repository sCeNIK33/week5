// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener
document.addEventListener('DOMContentLoaded', function(event){
    alert('The page is loaded')
})

//href = "#" for things that dont do anything click button thing

    let clickMeButton = document.querySelector(`.click-me-button`)
    clickMeButton.addEventListener('click',function(event){
    let outputElement = document.querySelector('.output')
    //outputElement.innerHTML = '<p> Click Me! was clicked! </p>'
    outputElement.insertAdjacentHTML('beforeend', `
    <p> Click Me! was clicked! </p>`)

})

    let googleLink = document.querySelector('.google-link')
    googleLink.addEventListener(`click`, function(event){
    outputElement.insertAdjacentHTML('beforeend', `
    <p> Click Me! was clicked! </p>`)
    
})


    let googleLink = document.querySelector('.google-link')
    googleLink.addEventListener(`click`, function(event){
    event.preventDefault()
    let outputElement = document.querySelector('.output')
    outputElement.insertAdjacentHTML('beforeend', `
    <p> Click Me! was clicked! </p>`)
    
})


let nameInput = document.querySelector(`#firstName`)
nameInput.addEventListener('change',function(event){
    let greetElement = document.querySelector(`#greet`)

    if(nameInput.value.length > 0) {
        greetElement.innerHTML = `Hi, ${nameInput.value}!`
    } else {
        greetElement.innerHTML = ""
    }
    
})