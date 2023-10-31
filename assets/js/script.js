// navbar


hamburger = document.querySelector(".hamburger");
        nav = document.querySelector("nav");
        hamburger.onclick = function() {
            nav.classList.toggle("active");
        }






// scroll btn
let btn = document.getElementById('btnn');
window.onscroll = function(){
    if(scrollY >= 400)
    {
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
btn.onclick = function(){
   scroll ({
        left : 0,
        top :0,
        behavior:"smooth"
    })
}
}


