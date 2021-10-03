let inputString = ""
const inputEl = document.getElementById("input-el")

function getResult() {
    return math.evaluate(inputString)
}

inputEl.addEventListener('input', function() {
    inputString = inputEl.value
})

inputEl.addEventListener('click', function() {
    inputEl.value = ''
    inputString = ''
})

inputEl.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        inputEl.value = `Result: ${math.evaluate(inputString)}`
        inputEl.blur()
    }
})
