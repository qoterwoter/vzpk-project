function showResponse(e) {
    // e.preventDefault();
    phone = document.getElementById('phone')
    email = document.getElementById('email')
    console.log(email.value.length)
    if (phone.value.length > 17 || email.value.length > 6) {
        sessionStorage.setItem('response',true)
        sessionStorage.setItem('height',document.documentElement.getBoundingClientRect().top)
        return true
    } else {
        background.style.display = 'block'
        response.style.display = 'block'
        let span = response.childNodes[1].childNodes[1]
        response.childNodes[1].innerHTML = 'Ошибка';
        response.childNodes[1].appendChild(span);
        response.childNodes[3].innerHTML = 'Введите данные правильно'
        return false;
    }
}
function closeResponse() {
    sessionStorage.setItem('response',false)
    background.style.display = 'none'
    response.style.display = 'none'
}
function addTheme(n) {
    if(typeof n === 'number') {
        windowTitle = "Рассчитать стоимость " + titles[n-1].innerHTML
    } else {
        windowTitle = n;
    }
    theme.value=windowTitle
}

let phone = document.getElementById('phone')
let email = document.getElementById('email')
let response = document.getElementsByClassName('consultation__response')[0];
let background = document.getElementsByClassName('respone__background')[0];
let windows = document.getElementsByClassName('windows__window');
let titles = document.getElementsByClassName('title__model');
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
        window.scrollTo(0,-parseInt(sessionStorage.getItem('height')));
        background.style.display = 'block'
        response.style.display = 'block'
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const inputs = Array.from(document.querySelectorAll('.consultation__input#email, .consultation__input#phone'));
    const inputListener = e => inputs.filter(i => i !== e.target).forEach(i => i.required = !e.target.value.length);
    inputs.forEach(i => i.addEventListener('input', inputListener));
});

for (let i = 0; i < windows.length;i++) {
    windows[i].childNodes[3].childNodes[7].childNodes[1].onclick=function() {addTheme(i+1)}
    windows[i].childNodes[3].childNodes[3].childNodes[5].childNodes[1].onclick=function() {addTheme(i+1)}
}