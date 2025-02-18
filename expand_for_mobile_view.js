

const women_btn=document.getElementById("women_btn");
const women_subcontent=document.getElementById("women_subcontent");

const women_footwear_btn=document.getElementById("women_footwear_btn");
const women_clothes_btn =document.getElementById("women_clothes_btn");
const women_accessories_btn=document.getElementById("women_accessories_btn");
const women_brands_btn=document.getElementById("women_brands_btn");

const men_btn=document.getElementById("men_btn");
const men_subcontent=document.getElementById("men_subcontent");

const men_footwear_btn=document.getElementById("men_footwear_btn");
const men_clothes_btn=document.getElementById("men_clothes_btn");
const men_accessories_btn=document.getElementById("men_accessories_btn");
const men_brands_btn=document.getElementById("men_brands_btn");


const kids_btn=document.getElementById("kids_btn");
const kids_subcontent=document.getElementById("kids_subcontent");

const kids_boys_btn=document.getElementById("kids_boys_btn");
const kids_girls_btn=document.getElementById("kids_girls_btn");
const kids_accessories_btn=document.getElementById("kids_accessories_btn");
const kids_brands_btn=document.getElementById("kids_brands_btn");

women_btn.onclick=()=> expand_subcontent(women_btn,women_subcontent);
men_btn.onclick=()=> expand_subcontent(men_btn,men_subcontent);
kids_btn.onclick=()=> expand_subcontent(kids_btn,kids_subcontent);


// this function is used for expand women,men,kids footwear, clothes...... 
function expand_subcontent(btn,item){
    
        //console.dir(item);
        for(let i=0;i<item.children.length;i++){
          // item.children[i].classList.toggle("expand_open");
            if(item.children[i].style.display==""){
             item.children[i].style.display="flex";
          
                btn.children[0].src="/resource/arrow-down-expand-svgrepo-com.svg";
            }
            else if(item.children[i].style.display=="flex"){
               item.children[i].style.display="";
              
                btn.children[0].src="/resource/arrow-down-svgrepo-com.svg";
            }
        }
}






women_footwear_btn.onclick=()=>expandChild(women_footwear_btn);
women_clothes_btn.onclick=()=>expandChild(women_clothes_btn);
women_accessories_btn.onclick=()=>expandChild(women_accessories_btn);
women_brands_btn.onclick=()=>expandChild(women_brands_btn);

men_footwear_btn.onclick=()=>expandChild(men_footwear_btn);
men_clothes_btn.onclick=()=>expandChild(men_clothes_btn);
men_accessories_btn.onclick=()=>expandChild(men_accessories_btn);
men_brands_btn.onclick=()=>expandChild(men_brands_btn);

kids_boys_btn.onclick=()=>expandChild(kids_boys_btn);
kids_girls_btn.onclick=()=>expandChild(kids_girls_btn);
kids_accessories_btn.onclick=()=>expandChild(kids_accessories_btn);
kids_brands_btn.onclick=()=>expandChild(kids_brands_btn);
// console.dir(women_footwear_btn.nextElementSibling);


// this function is used for expand items of  women,men,kids 
function expandChild(item){
    
    if(item.nextElementSibling.style.display==""){
        item.nextElementSibling.style.display="flex";
        item.children[0].src="/resource/arrow-down-expand-svgrepo-com.svg";
    }
    else if(item.nextElementSibling.style.display=="flex"){
       item.nextElementSibling.style.display="";
        item.children[0].src="/resource/arrow-down-svgrepo-com.svg";
    }
    //item.nextElementSibling.classList.toggle("expand_open");
    
}



const navbar_duplicate=document.getElementById("navbar");
const menu_btn=document.getElementById("menu_btn");
let active_state=0;
//this function is for transition of navbar
menu_btn.addEventListener("click",()=>{

    navbar_duplicate.classList.toggle("active");
    menu_btn.classList.toggle("rotate");
    active_state++;
    if(active_state%2==1){

        menu_btn.src="/resource/close-sm-svgrepo-com.svg";
  
    }
    else if(active_state%2==0){
        menu_btn.src="/resource/menu-alt-right-svgrepo-com.svg";
      reset();
      reset2();
        
      
    }
    
    
})
// console.dir(navbar_duplicate.children[1].children[1].children[0].children);
function reset(){
for(let m=1;m<=3;m++){
    for(let n=0;n<=3;n++){
    navbar_duplicate.children[m].children[1].children[n].children[1].style.display="";
    navbar_duplicate.children[m].children[1].children[n].children[0].children[0].src="/resource/arrow-down-svgrepo-com.svg";
}
}

}
//console.dir(navbar_duplicate.children[1].children[0].outerHTML);
function reset2(){
   for(let k=1;k<=3;k++){
    for(let l=0;l<=3;l++){
        navbar_duplicate.children[k].children[1].children[l].style.display="";
    }
  
   // navbar_duplicate.children[k].children[0].src="/resource/arrow-down-svgrepo-com.svg";
   navbar_duplicate.children[k].children[0].children[0].src="/resource/arrow-down-svgrepo-com.svg";
   }
}