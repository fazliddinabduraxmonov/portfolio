let upload = document.querySelector('.fa-video-camera'),
    videoUpload = document.querySelector('.videoUpload'),
    youTV = document.querySelector('.youTV'),
    youtubeMenu = document.querySelector('.fa-th'),
    toggleON = document.querySelector('.fa-toggle-off'),
    toggle = document.querySelector('.toggle'),
    site = document.getElementById('site'),
    videos = document.querySelector('.videos'),
    header = document.querySelector('#header'),
    onOff = document.querySelector('.onOff'),
    mainmenu = document.querySelector('.mainmenu'),
    h3 = document.querySelector('.h3'),
    blok = document.querySelector('.blok'),
    videoBlok = document.querySelectorAll('.videoBlok'),
    lang = document.querySelectorAll('.lang'),
    language = document.querySelector('.language'),
    subLang = document.querySelector('.subLang'),
    subDisp = document.querySelector('.subDisp'),
    acc = document.querySelectorAll('.acc'),
    channelName = document.querySelector('.channelName'),
    subAcc = document.querySelector('.subAcc'),
    switched = document.querySelector('.switched'),
    restricted = document.querySelector('.restricted'),
    restrict = document.querySelector('.restrict'),
    restMode = document.querySelector('.restMode'),
    onoff = document.querySelectorAll('.onoff'),
    country = document.querySelectorAll('.country'),
    joylashuv = document.querySelector('.joylashuv'),
    davlat = document.querySelector('.davlat'),
    subCountry = document.querySelector('.subCountry'),
    button = document.querySelector('.button'),
    account = document.querySelector('.account'),
    channelImg = document.querySelector('.img')


    







toggle.addEventListener('click',function(){
    if(onOff.innerHTML == 'Off'){
    toggleON.setAttribute('class','fa fa-toggle-on');
    toggleON.style.position = 'absolute'
    toggleON.style.right = 0
    site.style.background = 'rgb(60,60,60)';
    header.style.background = 'rgb(60,60,60)';
    header.style.color = 'white'
    videos.style.background = 'rgb(60,60,60)';
    onOff.innerHTML = 'On'
    h3.style.color = 'white'
    blok.style.color = 'black'
    for(let key in videoBlok){
        videoBlok[key].style.border = '1px solid  rgb(60, 60, 60)'
        videoBlok[key].addEventListener('mouseover',function(){
            videoBlok[key].style.border = '1px solid white'
            blok.style.color = 'black'
        })
        videoBlok[key].addEventListener('mouseleave',function(){
            videoBlok[key].style.border = '1px solid  rgb(60, 60, 60)'
        })
    }
}
    else {
    toggleON.setAttribute('class','fa fa-toggle-off');
    toggleON.style.position = 'absolute'
    toggleON.style.right = 0
    site.style.background = 'white';
    header.style.color = 'black'
    header.style.background = 'white';
    videos.style.background = 'white';
    onOff.innerHTML = 'Off'
    h3.style.color = 'black'
    blok.style.color = 'rgb(149,149,149)'
    for(let key in videoBlok){
        videoBlok[key].style.border = '1px solid  rgb(245, 250, 245)'
        blok.style.color = 'black'
        videoBlok[key].addEventListener('mouseover',function(){
            videoBlok[key].style.border = '1px solid  rgb(245, 250, 245)'
            blok.style.color = 'black'
        })
        videoBlok[key].addEventListener('mouseleave',function(){
            videoBlok[key].style.border = '1px solid  rgb(245, 250, 245)'
        })
    }
        videoBlok[key].style.border = '1px solid  rgb(245, 250, 245)'
}
});
  





upload.addEventListener('click',function(){
    if (videoUpload.style.display == 'flex'){
        videoUpload.style.display = 'none';
    }
    else if((youTV.style.display =='block') || (account.style.display == 'block')){
        youTV.style.display ='none'
        account.style.display = 'none'
    } 
    else videoUpload.style.display = 'flex';
});


youtubeMenu.addEventListener('click', function(){
    if (youTV.style.display == 'block') {
        youTV.style.display = 'none'
    }
    else if(videoUpload.style.display == 'flex') {
        videoUpload.style.display = 'none'
        account.style.display = 'none'
    }
    else if(account.style.display == 'block'){
        account.style.display = 'none'
    }
    else youTV.style.display = 'block';
});

channelImg.addEventListener('click',function(){
    if(account.style.display == 'block'){
        account.style.display = 'none'
    }
    else if((videoUpload.style.display == 'flex') || (youTV.style.display == 'block')){
        videoUpload.style.display = 'none'
        youTV.style.display = 'none'
    }
    else account.style.display = 'block'
})


window.addEventListener('DOMContentLoaded',function(){
{subDisp.addEventListener('click',function(){
    if(subLang.style.display == 'block'){
        subLang.style.display = 'none';
    }
    else if((subAcc.style.display == 'block') || (restMode.style.display == 'block') ||(subCountry.style.display == 'block')) {
        subCountry.style.display = 'none'
        subAcc.style.display = 'none'
        restMode.style.display = 'none'
    }
    else {
        subLang.style.display = 'block';
    }
})
for(let j in lang){
    lang[j].addEventListener('click',function(){
        language.innerHTML = lang[j].innerHTML;
        subLang.style.display = 'none';
    })
}}
});


window.addEventListener('DOMContentLoaded',function(){
    switched.addEventListener('click',function(){
        if(subAcc.style.display == 'block'){
            subAcc.style.display = 'none'
        }
        else if((subLang.style.display == 'block') || (restMode.style.display == 'block') ||(subCountry.style.display == 'block')) {
            subCountry.style.display = 'none'
            subLang.style.display = 'none'
            restMode.style.display = 'none'
        }
        else subAcc.style.display = 'block'
    })
    
    for(let k in acc){
    acc[k].addEventListener('click',function(){
        channelName.innerHTML = acc[k].innerHTML;
        subAcc.style.display = 'none';
    })
    
}
});


window.addEventListener('DOMContentLoaded',function(){
    restricted.addEventListener('click',function(){
    if(restMode.style.display == 'block'){
        restMode.style.display = 'none'
    }
    else if((subAcc.style.display == 'block') || (subLang.style.display == 'block') ||(subCountry.style.display == 'block')) {
        subCountry.style.display = 'none'
        subAcc.style.display = 'none'
        subLang.style.display = 'none'
    }
    else restMode.style.display = 'block'
})

    for(let r in onoff){
        onoff[r].addEventListener('click',function(){
            restrict.innerHTML = onoff[r].innerHTML
        })
    }

})

window.addEventListener('DOMContentLoaded',function(){
    joylashuv.addEventListener('click',function(){
        if(subCountry.style.display == 'block'){
            subCountry.style.display = 'none'
        }
        else if((subAcc.style.display == 'block') || (restMode.style.display == 'block') ||(subLang.style.display == 'block')) {
            subLang.style.display = 'none'
            subAcc.style.display = 'none'
            restMode.style.display = 'none'
        }
        else subCountry.style.display = 'block'
    })

    for(let c in country){
        country[c].addEventListener('click',function(){
            davlat.innerHTML = country[c].innerHTML
            subCountry.style.display = 'none'
        })
    }
})

let searchMphone = document.querySelector('.searchMphone'),
    voice = document.querySelector('.voice'),
    voicei = document.querySelector('.voicei'),
    voiceh4 = document.querySelector('.voiceh4')

searchMphone.addEventListener('click',function(){
    if(voice.style.display == 'block'){
        voice.style.display = 'none'
    } else voice.style.display = 'block'
})

voicei.addEventListener('click',function(){
    if(voiceh4.style.display == 'block'){
        voiceh4.style.display = 'none'
    } else voiceh4.style.display = 'block'
})


let dispMenu = document.querySelector('.fa-navicon'),
    menu = document.querySelector('.menu'),
    lib = document.querySelector('.lib'),
    links = document.querySelectorAll('.links'),
    micon = document.querySelectorAll('.micon')

window.addEventListener('DOMContentLoaded',function(){
if((window.innerWidth >= 641) && (window.innerWidth <= 1007)){
    dispMenu.addEventListener('click',function(){
        if(menu.style.width < '30%'){
        menu.style.width = '30%'
        menu.style.background = 'white'
        menu.style.border = '1px solid gray'
        window.addEventListener('click',function(){
            for (let mi in micon){
            micon[mi].style.margin = '0 0 0 5%'
        }})
        for(let link in links){
            links[link].style.width = '88%'
            links[link].style.margin = '-0% 0% 0% 6%'
            links[link].style.height = '50px'
            links[link].style.padding = '10% 0% 0% -100%'
        }
    } else {
        menu.style.width = '12%'    
        menu.style.border = 'none'
        menu.style.background = 'none'
        window.addEventListener('click',function(){
            for(let mic in micon){
                micon[mic].style.margin = '1% 50% 0% 39%'
            }
        })

    }

    })


}
})
    

let sicon = document.querySelector('.fa-search'),
    sarea = document.querySelector('.sarea')

window.addEventListener('DOMContentLoaded',function(){
    if(window.innerWidth <= 640){
        
    if(onOff.innerHTML == 'Off'){
        sicon.style.color = 'rgb(190,190,190)'
    }
    sicon.addEventListener('click',function(){
        if(sarea.style.opacity == '0'){
            sarea.style.opacity = '1'
        }
        else sarea.style.opacity = '0'
    })
}})