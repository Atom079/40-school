'use strict'
window.addEventListener('DOMContentLoaded', ()=>{
    const burger = document.querySelector(".bars");
    const navLinks = document.querySelector(".nav-links")
    console.log(navLinks);
    burger.addEventListener('click', ()=>{
        navLinks.classList.toggle("active_Nav");
    })
})