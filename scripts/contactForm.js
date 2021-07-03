function showResponse(e) {
    // e.preventDefault();
    sessionStorage.setItem('response',true)
}
function closeResponse() {
    sessionStorage.setItem('response',false)
    background.style.display = 'none'
    response.style.display = 'none'
}
function addTheme(n) {
    if(typeof n === 'number') {
        windowTitle = windows[n-1].childNodes[1].childNodes[1].innerHTML
    } else {
        windowTitle = n;
    }
    theme.value=windowTitle
}

let response = document.getElementsByClassName('consultation__response')[0];
let background = document.getElementsByClassName('respone__background')[0];
let windows = document.getElementsByClassName('windows__window');
let theme = document.getElementsByClassName('form__theme')[0];

window.onclick = function (event) {
    if (event.target != response) {
        background.style.display = 'none'
        response.style.display = 'none'
        sessionStorage.setItem('response',false)
    }
}
window.onload = function(event) {
    if (sessionStorage.getItem('response')=='true') {
        window.scrollTo(0,document.body.scrollHeight);
        background.style.display = 'block'
        response.style.display = 'block'
    }
}
for (let i = 0; i < windows.length;i++) {
    windows[i].childNodes[3].childNodes[7].childNodes[1].onclick=function() {addTheme(i+1)}
    windows[i].childNodes[3].childNodes[3].childNodes[5].childNodes[1].onclick=function() {addTheme(i+1)}
}