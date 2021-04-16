const [current,imgs]=[document.querySelector(".current"),document.querySelectorAll(".img1 img")];
console.log(imgs)
imgs[1].style.borderRadius="10px";
imgs[1].style.opacity=0.4;
imgs.forEach((img)=>{
    console.log(img)
    
    img.addEventListener("click",function(e){
        imgs.forEach(function(img){
            img.style.borderRadius="";
             img.style.border="none";
            img.style.opacity=1;
        })
        current.src=e.target.src;
        console.log(e)
        e.target.style.opacity=0.4;
        // e.target.style.border="3px solid gray";
        e.target.style.borderRadius="10px"
        // setTimeout(() => {
        //     e.target.style.border="none";
        //     e.target.style.borderRadius="" 
        // }, 2000);
    })
    

})