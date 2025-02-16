const myElement = document.getElementById('myDiv');



myElement.addEventListener('mouseleave', (event) => {

  console.log("Click X position within element:", event.offsetX, event.offsetY); 

  if(event.offsetX<=0 || event.offsetY<=0 || event.offsetY<myElement.clientWidth){
    // console.log("mouse leave from left, top, right");
  }
  else{
    // console.log("Mouse leave from bottom")
  }

});
