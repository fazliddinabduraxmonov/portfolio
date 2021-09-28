window.addEventListener('DOMContentLoaded', function() {

    let search = document.querySelector('.fa-search'),
        input = document.querySelector('.input');

    search.addEventListener('click', function(){
        if (input.style.display == 'block') {
            input.style.display = 'none'
        }
        else {
            input.style.display = 'block'
            input.style.margin = '20px 0px 0 20%'
        }

    })

    let regBtn = document.querySelector('.reg-btn'),
        mregister = document.querySelector('.mregister'),
        remBtn = document.querySelector('.fa-remove');

    regBtn.addEventListener('click',() => {
        mregister.style.display = 'block'
        regBtn.style.borderRadius = '10px'
        regBtn.style.transform = 'scale(0.9)'
    })
    remBtn.addEventListener('click', () => {
        mregister.style.display = 'none'
        regBtn.style.transform = 'scale(1)'
        regBtn.style.borderRadius = '0'
    })


})