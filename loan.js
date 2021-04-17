
const btn=document.querySelector(".bt");
const img=document.querySelector("#img");
const res=document.querySelector("#result")
btn.addEventListener("click",add);
function add(){

    img.style.display="block";
    setTimeout(add2,1000)
}
function add2(){
    let am=document.querySelector("#amount").value;
let int=document.querySelector("#interest").value;
let yr=document.querySelector("#year").value;
    if(am=="" || int =="" || yr=="" ){
        setTimeout(alert1,2000);
        am="";
    }
    else if((am<=0 || int<0 || yr<=0)){
        
        setTimeout(alert,2000);
        
    }
    else{
        am=parseFloat(am);
    int=int/100/12;
    yr=yr*12;
    var x = Math.pow(1 + int, yr);
    var monthly = (am*x*int)/(x-1);
    console.log(`${am},${int},${yr},${monthly}`)
    if ((!isNaN(monthly) && 
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY))) {

        document.querySelector("#month").value = monthly.toFixed(2);
        document.querySelector("#total").value = (monthly*yr).toFixed(2);
        document.querySelector("#total-interest").value = 
        ((monthly * yr) - am).toFixed(2);
            img.style.display="none";
            res.style.display="block";
    }
    else if(int==0){
        monthly=am/yr;
        document.querySelector("#month").value = monthly.toFixed(2);
        document.querySelector("#total").value = (monthly*yr).toFixed(2);
        document.querySelector("#total-interest").value = 
        ((monthly * yr) - am).toFixed(2);
            img.style.display="none";
            res.style.display="block";

    }
    else{
        setTimeout(alert,2000);

    }
    }
}
function alert(){
    
    let d=document.createElement("div");
    d.className="alert alert-secondary at";
    d.innerHTML=`Input is not correct`
    let card=document.querySelector("#form");
    let h=document.querySelector(".he");
    card.insertBefore(d,h);
    img.style.display="none";
    res.style.display="none";
    setTimeout(()=>{
        document.querySelector(".at").remove();
    },2000)
}
function alert1(){
    let d=document.createElement("div");
    d.className="alert alert-secondary at";
    d.innerHTML=`Input is empty`
    let card=document.querySelector("#form");
    let h=document.querySelector(".he");
    card.insertBefore(d,h);
    img.style.display="none";
    res.style.display="none";
    setTimeout(()=>{
        document.querySelector(".at").remove();
    },2000)
}