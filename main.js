const scrollUp=document.getElementById("scroll-up");
const heroSection=document.getElementById("heroSection");
// const care=document.getElementById("car");
const header=document.getElementById("headre");

window.addEventListener("scroll",()=>{
    if(window.scrollY>=350){
        scrollUp.classList.add("scroll-show");
    }
    else{
        scrollUp.classList.remove("scroll-show");
    }
})

scrollUp.addEventListener("click", () => {
    heroSection.scrollIntoView({ behavior: 'smooth' });
});







// window.addEventListener("scroll", () => {
//     let top = window.scrollY;  // cette var siginfie la longeur de page lors du déffiliment
//     console.log(`Current scroll position: ${top}px`);
// });


function activeLiNK(){
     let sections=document.querySelectorAll("section");
     let navLink=document.querySelectorAll("header nav a")

     window.onscroll= () =>{
        sections.forEach(sec => {

            let top=window.scrollY; //longeur de page lors du scrolly
            let offset=sec.offsetTop;// longeur de espace entre  parent et element
            let height=sec.offsetHeight// height de section avec les boredrs et margin
            let id =sec.getAttribute('id')// id de section

            if(top >=offset && top< offset+height){// siginfie si la longeur de scroll du window egale ou grand du longeur de espace entre sec et par     &&
                // longeur de scroll moins de la somme de espace entre element et paren + heighr de element avtive le blok
                    navLink.forEach(links=>{
                        links.classList.remove("active");
                        document.querySelector('header nav a[href*='+id+']').classList.add("active")
                    })            
                }
            
        });

    }
}

activeLiNK()

//   animation with dcrollrevall

const  sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    delay:300,
    // reset:true,// anomation repeat
})

sr.reveal('.image_hero_cactus,.titre_new_cactus,.img_care,.box_contact');
sr.reveal('.hello_message_hero,.for_car,.image_contact_img,.last_info', { delay: 500 ,duration:2500});
sr.reveal('.cards_cactus,.footer-section', { delay: 500, interval: 100 });
sr.reveal('.box', {  interval: 100 });




let menu_show=document.getElementById("show_menu");
let hide_menu=document.getElementById("hide_menu");
let nav_media=document.getElementsByClassName("menu_media")[0];

if(menu_show){
    menu_show.addEventListener("click",()=>{
        nav_media.classList.add("schow_menu");
    })
}
if(hide_menu){
    hide_menu.addEventListener("click",()=>{
        nav_media.classList.remove("schow_menu");
    })
}




















let top_y = heroSection.offsetTop;  // cette var siginfie la longeur de espace entre border top de element et element parent
console.log(`Current scroll position: ${top_y}px`);

let y = heroSection.offsetHeight;  // cette var siginfie la longeur element en plus les border et padding et margin
console.log(`Current scroll position: ${y}px`);
