

let mobile_view=false,desktop_view=false;
const navbar_duplicate=document.getElementById("navbar");
/* this code was just for resize checking . which is not necessary for sm
window.onload=()=>{
    if(window.innerWidth>640){
        console.log("desktop view");
        desktop_view=true;
        navbar_duplicate.style.display="";
    }
    else{ 
        console.log("mobile view");
        mobile_view=true;
        navbar_duplicate.style.display="flex";
    }
    
}

window.onresize=()=>{
    if(mobile_view && window.innerWidth>640){
        console.log("entered into desktop view");
        mobile_view=false; desktop_view=true;
        navbar_duplicate.style.display="";
    }
    else if(desktop_view && window.innerWidth<640){
        console.log("entered into mobile view");
        mobile_view=true; desktop_view=false;
        navbar_duplicate.style.display="flex";
    }
} */

const menu_btn=document.getElementById("menu_btn");
let active_state=0;
menu_btn.addEventListener("click",()=>{

    navbar_duplicate.classList.toggle("active");
    menu_btn.classList.toggle("rotate");
    active_state++;
    if(active_state%2==1){
        menu_btn.src="/resource/close-sm-svgrepo-com.svg";
  
    }
    else if(active_state%2==0){
        menu_btn.src="/resource/menu-alt-right-svgrepo-com.svg";
       
    }
    
    
})