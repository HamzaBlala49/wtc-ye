// selectors
// let preLoader = document.querySelector('.preloader')
let navbar =document.querySelector('.mynavbar')
let linkNavbar =document.querySelectorAll('.mynavbar .links .link a')
let linkSideBar =document.querySelectorAll('.sidebar .links .link a')
let barIcon =document.querySelector('.bar-icon')
let closeIcon =document.querySelector('.close-icon')
let sideBar = document.querySelector('.sidebar')
let social =document.querySelector('.social')




// start preLoader
// window.addEventListener('load',()=>{
//     preLoader.style.opacity ='0';
//     setTimeout(()=>{
//         preLoader.style.display ='none';
//     },2000)
// })
// end preLoader
// start navbar
window.addEventListener('scroll',()=>{

    if(window.scrollY>='580'){
        social.style.transform='translateX(0px)';
    }else{
        social.style.transform='translateX(-40px)';
    }
})
barIcon.onclick=(_=>{
    sideBar.style.display ='flex'
})
closeIcon.onclick=(_=>{
    sideBar.style.display ='none'
})
//end navber

// start sideBar
linkSideBar.forEach(el =>{
    el.addEventListener('click', ()=>{
        sideBar.style.display ='none'
    })
})
//end sideBar



// end mode