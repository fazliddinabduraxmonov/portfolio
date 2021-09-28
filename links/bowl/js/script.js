let orderForm = document.querySelector('.orderForm'),
    order = document.querySelector('.order'),
    close = document.querySelector('.close'),
    ok = document.querySelector('.ok');

order.addEventListener('click',function(){
    orderForm.style.display = 'block';
    orderForm.style.transition =  '10s ease-in-out';
})
close.addEventListener('click',function(){
    orderForm.style.display = 'none';
})
ok.addEventListener('click',function(){
    orderForm.style.display = 'none';
})