window.addEventListener('DOMContentLoaded', ()=>{

    let design = document.querySelector('.design'),
        front = document.querySelector('.front'),
        back = document.querySelector('.back'),
        web = document.querySelector('.web');

    design.addEventListener('mouseenter',()=>{
        design.src = "img/cardvh.png"
    })
    design.addEventListener('mouseleave',()=>{
        design.src = "img/cardd.png"
    })

    front.addEventListener('mouseenter',()=>{
        front.src = "img/cardfh.png"
    })
    front.addEventListener('mouseleave',()=>{
        front.src = "img/cardf.png"
    })

    back.addEventListener('mouseenter',()=>{
        back.src = "img/cardbh.png"
    })
    back.addEventListener('mouseleave',()=>{
        back.src = "img/cardb.png"
    })

    web.addEventListener('mouseenter',()=>{
        web.src = "img/cardwh.png"
    })
    web.addEventListener('mouseleave',()=>{
        web.src = "img/cardw.png"
    })


    let ytube = document.querySelector('.ytube'),
        bowl = document.querySelector('.bowl'),
        meal = document.querySelector('.meal'),
        dance = document.querySelector('.dance'),
        book = document.querySelector('.book');

    ytube.addEventListener('click',()=>{
        open('links/youtube/index.html')
    })
    bowl.addEventListener('click',()=>{
        open('links/bowl/index.html')
    })
    meal.addEventListener('click',()=>{
        open('links/meal/index.html')
    })
    dance.addEventListener('click',()=>{
        open('links/dance/index.html')
    })
    book.addEventListener('click',()=>{
        open('links/Booklist/index.html')
    })


    let headerShow = document.querySelector('.header-show'),
        modalHeader = document.querySelector('.modal-header'),
        mhRemove = document.querySelector('.mhremove');


    headerShow.addEventListener('click',()=>{
        modalHeader.style.display = 'flex'
    })
    mhRemove.addEventListener('click',()=>{
        modalHeader.style.display = 'none'
    })

    let mhbutton = document.querySelector('.mhbutton'),
        mhorder = document.querySelector('.mhorder'),
        orderBtn = document.querySelector('.order-btn'),
        mhbolim = document.querySelector('.mhbolim');

    mhbutton.addEventListener('click', () => {
        mhbolim.style.display = 'none'
        mhorder.style.display = 'block'
        mhbutton.style.display = 'none'
    })
    orderBtn.addEventListener('click',()=>{
        modalHeader.style.display = 'none'
        mhorder.style.display = 'none'
        mhbolim.style.display = 'flex'
        mhbutton.style.display = 'block'
        alert('Biz siz bilan bog\'lanamiz')
    })


    let todoBtn = document.querySelector('.todo-btn'),
        weModal = document.querySelector('.we-modal'),
        weModbtn = document.querySelector('.we-modbtn');

    todoBtn.addEventListener('click', () => {
        weModal.style.display = 'flex'
    })
    weModbtn.addEventListener('click', () => {
        weModal.style.display = 'none'
    })

    let advBtn = document.querySelector('.adv-btn'),
        advModal = document.querySelector('.adv-modal'),
        advModbtn = document.querySelector('.adv-modbtn');

    advBtn.addEventListener('click', () => {
        advModal.style.display = 'flex'
    })
    advModbtn.addEventListener('click', () => {
        advModal.style.display = 'none'
    })

    let marketBtn = document.querySelector('.market-btn'),
        marketModal = document.querySelector('.market-modal'),
        marketModbtn = document.querySelector('.market-modbtn');

    marketBtn.addEventListener('click', () => {
        marketModal.style.display = 'flex'
    })
    marketModbtn.addEventListener('click', () => {
        marketModal.style.display = 'none'
    })
    

    let portfolioBtn = document.querySelector('.portfolio-btn'),
        portModal = document.querySelector('.port-modal'),
        portRem = document.querySelector('.port-rem'),
        portBtn = document.querySelector('.port-btn'),
        tel = document.querySelector('.tel');

    portfolioBtn.addEventListener('click',()=>{
        portModal.style.display = 'block'
    })
    portRem.addEventListener('click',()=>{
        portModal.style.display = 'none'
    })
    portBtn.addEventListener('click',()=>{
        if(tel.value != ''){
            alert('Biz siz bilan bog\'lanamiz')
            portModal.style.display = 'none'
        }else {
            portBtn.addEventListener('click',(e)=>{
                e.preventDefault;
            })
            alert ('Bog\'lanishimiz uchun raqamingizni kiriting')
        }
    })


    let hamMenu = document.getElementById('ham-menu'),
        laddress = document.querySelector('.laddress'),
        site = document.getElementById('site');

    hamMenu.addEventListener('click', ()=> {
        if(hamMenu.className != 'fa fa-remove'){
        hamMenu.className = 'fa fa-remove'
        laddress.style.display = 'block'
        }else{
            hamMenu.className = 'fa fa-bars'
            laddress.style.display = 'none'
        }
    })

    

})