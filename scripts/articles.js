function changePage(n) {
    console.log(n)
    let button = [...document.getElementsByClassName('buttons__button')];
    newN=(n-1)*5
    for (let i = 0; i<newN;i++) {
        articles[i].style.display='none'
    }
    for(let i = newN; i<articles.length; i++) {
        articles[i].style.display='flex'
    }
    for(let i = 0; i < button.length;i++) {
        button[i].classList.remove('buttons__button_current')
        button[n-1].classList.add('buttons__button_current')
    }
    update(newN);
}
function changeConent(n) {
    console.log(n)
    for(let i = 0; i < articles.length;i++) {
        articles[i].classList.remove('switch__item_current')
    }
    articles[n-1].classList.add('switch__item_current')

}
function update(n) {
    let button = document.getElementsByClassName('buttons__button');
    console.log('updating...')
    length=articles.length;
    let articles2 = articles.slice(n,length)
    if(length>5 && button.length>1) {
        console.log('updating2...')
        for(let i = 0; i < length;i++) {
            articles2[i].style.display='flex';
            if(i>4) {
                articles2[i].style.display='none';
            }
        }
    }
}
let articles = [...document.getElementsByClassName('switch__item')];
let buttons = [...document.getElementsByClassName('switcher__buttons')];
if(articles.length>5) {
    for (let i = 1; i < articles.length/5; i++) {
        let button = document.createElement('p')
        button.className = 'buttons__button'
        button.onclick = function() {changePage(i+1)}
        buttons[0]
        .appendChild(button)
        .appendChild(document.createTextNode(i<10 ? `0${i+1}` : i+1))
    }
    if (buttons.length) {
        for(let i = 0; i < articles.length;i++) {
            articles[i].style.display='flex';
            if(i>4) {
                articles[i].style.display='none';
            }
        }
    }
} else {
    buttons[0].style.display='none'
}