function showResponse(e) {
    // console.log('Response')
    e.preventDefault();
    background.style.display = 'block'
    response.style.display = 'block'
}
let response = document.getElementsByClassName('consultation__response')[0]
let background = document.getElementsByClassName('respone__background')[0]
function closeResponse() {
    background.style.display = 'none'
    response.style.display = 'none'
}
window.onclick = function (event) {
    if (event.target != response) {
        background.style.display = 'none'
        response.style.display = 'none'
    }
}