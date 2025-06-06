// navbar css property in scroll
window.addEventListener("scroll",()=>{
    const navbar=document.querySelector(".navbar");
    if(window.scrolly>100){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled")
    }
});

// profile section redirecting
const profileIcon =document.querySelector(".profile-icon");
profileIcon.addEventListener("click", ()=>{
    window.location.href="profile-details.html";
});

//content card or movie card
const contentcard=document.querySelectorAll(".content-card");
contentcard.forEach((card)=>{
    card.addEventListener("mouseEnter", ()=>{
        card.computedStyleMap.transform="scale(1.05)";
    });

    card.addEventListener("mouseleave", ()=>{
        card.computedStyleMap.transform="scale(1)";
    });
});

