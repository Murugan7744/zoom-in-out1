var btn1=document.getElementById("btn-1");
var btn2=document.getElementById("btn-2");

var image=document.getElementById("images");


btn1.addEventListener("click",function(){
    var photo=image.width;    
    
    if(image.width==600){
        alert(" zoom-in level  reched");
    }
    else{
        image.style.width=(photo+20)+"px";
    }
})

btn2.addEventListener("click",function(){
    var photo=image.width;

    if(image.width==500){
        alert(" zoom-out level reched");
    }
    else{
        image.style.width=(photo-20)+"px";
    }

})