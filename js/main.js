

var imgs =Array.from( document.getElementsByClassName("img-fluid"));
var lightBoxCont=document.getElementById("lightBoxContainer")
var lightBoxItem=document.getElementById("lightBoxItem")

var currentIndex=0;

for(i=0;i<imgs.length;i++){
    
        imgs[i].addEventListener("click",function(eventInfo){
                var imgSrc=eventInfo.target.src;
        
                lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
                lightBoxCont.style.display="flex"
                // console.log(imgsArray.indexOf(eventInfo.target));
                currentIndex=imgs.indexOf(eventInfo.target)
            })
        }
        
var cls=document.getElementById("close");
cls.addEventListener("click",clsSlider)
function clsSlider(){
    lightBoxCont.style.display="none";
}

var nextIcon=document.getElementById("next");
nextIcon.addEventListener("click",nextSlider)
function nextSlider(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0
    }
    var imgSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc}`;

}

var prevIcon =document.getElementById("prev");
prevIcon.addEventListener("click",prevSlider)
function prevSlider(){
    currentIndex--;
    if(currentIndex<0){
     currentIndex=imgs.length-1
 }
    var imgSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc}`;
}


document.addEventListener("keydown",function(e){
    if(e.keyCode==27) //escape
    {
        clsSlider()
    }else if(e.keyCode==37){
        prevSlider()
    }else{
        nextSlider()
    }
})