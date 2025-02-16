const header_middle=document.getElementById("header_middle");
const navbar=document.getElementById("navbar");


// console.log(navbar.children.length);
/* Start Header Middle Button Adding Section  */
for(let i=0;i<navbar.children.length-1;i++){
    let copied_node="copied_node";
    // console.dir(navbar.children[i].children[0]);
    copied_node=copied_node.concat(i.toString());
//    console.log(copied_node);
   copied_node=navbar.children[i].children[0].cloneNode(true);
   header_middle.appendChild(copied_node);
//    console.dir(copied_node);
}
/* end Header Middle Button Adding Section  */

/* start drop down process by cloning from mobile view navbar to desktop view dropdown section */
const header_dropdown=document.getElementById("header_dropdown");
const header_dropdown_right=document.getElementById("header_dropdown_right");

/* const popular_clone=document.getElementById("popular").cloneNode(true);
header_dropdown.appendChild(popular_clone); // copying from popular section that is fixed
 */
const women_btn_duplicate=document.getElementById("women_btn");
const men_btn_duplicate=document.getElementById("men_btn");
const kids_btn_duplicate=document.getElementById("kids_btn");
// console.dir(men_btn_duplicate);

const women_subcontent_duplicate=document.getElementById("women_subcontent").cloneNode(true);
const men_subcontent_duplicate=document.getElementById("men_subcontent").cloneNode(true);
const kids_subcontent_duplicate=document.getElementById("kids_subcontent").cloneNode(true);



women_btn_duplicate.onmouseover=()=>{
    console.log("Women Mouse Over");
    header_dropdown_right.innerHTML="";
    // console.log(women_subcontent_duplicate.outerHTML);
   header_dropdown_right.appendChild(women_subcontent_duplicate);
    header_dropdown.classList.add("displaying");
    header_dropdown.style.display="flex";

  
}

men_btn_duplicate.onmouseover=()=>{
    console.log("men Mouse Over");   
    header_dropdown_right.innerHTML="";
   
    header_dropdown_right.appendChild(men_subcontent_duplicate);
    header_dropdown.classList.add("displaying");
    header_dropdown.style.display="flex";

}

kids_btn_duplicate.onmouseover=()=>{
    console.log("men Mouse Over");   
    header_dropdown_right.innerHTML="";
   
    header_dropdown_right.appendChild(kids_subcontent_duplicate);
    header_dropdown.classList.add("displaying");
    header_dropdown.style.display="flex";

}


header_middle.onmouseleave=(event)=>{
    // console.log("Women + Men Mouse Leave");
    // header_dropdown.style.display="";
    // header_dropdown.classList.remove("displaying");
    console.log(event.offsetX,event.offsetY,header_middle.clientHeight);
    if(event.offsetX<=0 || event.offsetY<=0 || (event.offsetY>0 && event.offsetY<header_middle.clientHeight)){
        console.log("mouse leave from left, top, right");
        header_dropdown.classList.remove("displaying");
      }
      else{
        console.log("Mouse leave from bottom");
        
      }
   
}
header_dropdown.onmouseleave=()=>{
    // console.log("header drop down Mouse Leave");
    // header_dropdown.style.display="";
    header_dropdown.classList.remove("displaying");
}


/* end drop down process by cloning from mobile view navbar to desktop view dropdown section */

