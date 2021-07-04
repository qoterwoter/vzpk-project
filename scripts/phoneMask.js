document.getElementById('phone').addEventListener('input', function (e) {
    // var x = e.target.value
    //     .replace(/\D/g, '')
    //     .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    // e.target.value = !x[3] ? x[1] + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[5] + '-' + x[5] : '');
    let phoneMask = IMask(
        document.querySelector('.consultation__input#phone'), {
            mask: '+{7} (000) 000-00-00'
        }
    )
});