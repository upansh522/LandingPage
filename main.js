
let nav = document.querySelector(".navbar");
window.onscroll =function(){
    if(document.documentElement.scrollTop > 50)
        {
            nav.classList.add("header-scrolled");
        }
        else{
            nav.classList.remove("header-scrolled");
        }
}

let navCollapse =document.querySelector(".navbar-cpllapse.collapse");
let navbar=document.querySelectorAll(".nav-link");
navbar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})
