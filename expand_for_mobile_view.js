

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

women_btn.onclick=()=> expand_women_subcontent();

function expand_women_subcontent(){
   
        // console.dir(women_subcontent.children);
        for(let i=0;i<women_subcontent.children.length;i++){
            if(women_subcontent.children[i].style.display==""){
                women_subcontent.children[i].style.display="flex";
            }
            else if(women_subcontent.children[i].style.display=="flex"){
                women_subcontent.children[i].style.display="";
            }
        }
}

men_btn.onclick=()=> expand_men_subcontent();

function expand_men_subcontent(){
   
    // console.dir(men_subcontent.children);
    for(let i=0;i<men_subcontent.children.length;i++){
        if(men_subcontent.children[i].style.display==""){
            men_subcontent.children[i].style.display="flex";
        }
        else if(men_subcontent.children[i].style.display=="flex"){
            men_subcontent.children[i].style.display="";
        }
    }
}

kids_btn.onclick=()=> expand_kids_subcontent();

function expand_kids_subcontent(){
   
    // console.dir(kids_subcontent.children);
    for(let i=0;i<kids_subcontent.children.length;i++){
        if(kids_subcontent.children[i].style.display==""){
            kids_subcontent.children[i].style.display="flex";
        }
        else if(kids_subcontent.children[i].style.display=="flex"){
            kids_subcontent.children[i].style.display="";
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
function expandChild(item){
    if(item.nextElementSibling.style.display==""){
        item.nextElementSibling.style.display="flex";
    }
    else if(item.nextElementSibling.style.display=="flex"){
        item.nextElementSibling.style.display="";
    }
}