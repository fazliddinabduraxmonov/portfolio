window.addEventListener('DOMContentLoaded', () =>{
    
    let searchBtn = document.querySelector('.fa-search'),
    sinp = document.querySelector('#sinp');
    
    searchBtn.addEventListener('click',()=>{
        if(sinp.style.display == 'block') {
            sinp.style.display = 'none'
        } else sinp.style.display = 'block'
    })
    
    let subbtn = document.querySelector('.submit-btn');
    
    subbtn.addEventListener('click',()=>{
        alert("You are joined,THANK YOU!")
    });
    
    
    
    
    let modalOrder = document.querySelector('.modal-order'),
    orderBtn = document.querySelector('.order-btn'),
    header = document.querySelector('#header'),
    remBtn = document.querySelector('.fa-remove');

    
    orderBtn.addEventListener('click',()=>{
        if(modalOrder.style.display == 'block'){
            modalOrder.style.display = 'none'
            header.style.opacity = '1'
        }
        else{
            modalOrder.style.display = 'block'
            header.style.opacity = '0.2'
            modalOrder.style.opacity = '1 !important'
        }
    })
    remBtn.addEventListener('click',()=>{
        modalOrder.style.display = 'none'
        header.style.opacity = '1'
    })
    


    let card = document.querySelectorAll('.card'),
        cardImg = document.querySelectorAll('.cardimg');

    
    for(let keyi in cardImg){
        cardImg[keyi].addEventListener('click',()=>{
            if(cardImg[keyi].style.transform != 'scale(1.8)'){
                cardImg[keyi].style.transform = 'scale(1.8)'
            }else cardImg[keyi].style.transform = 'scale(1)'
        })
    }

        



})