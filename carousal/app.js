let slides=document.querySelectorAll(".slide");
let counter=0;
// console.log(counter,slides.length);
slides.forEach((slide,id )=> {
    slide.style.left=`${id*100}%`;
    
});
//  transform: translateX();
function slideImage(){
    slides.forEach(
        (slide)=>{
            // console.log(counter)
            slide.style.transform=`translateX(${counter*100}%)`
        }
    )
}
function goNext(){
    if(counter==-4)return ;
   // console.log(counter);
    counter--;
    slideImage();
}

function goPrev(){
    if(counter==0) return ;
    //console.log(counter);
    counter++;
    slideImage();
}