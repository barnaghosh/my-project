document.querySelector(".btn").addEventListener("click",f)
document.querySelector("#input").addEventListener("keypress",(e)=>{
    if(e.keyCode == 13){
        f();
    }
})
var myVar;
function f(){
    
    stop();
    let city=document.querySelector("#input").value;
    
    
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7537fc2df623430a5e00f2e755b75665`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data)
                document.querySelector("#input").value="";
                document.querySelector(".card-action").style.display="block";
                
                


                function check(){
                    let temp=(data.main.temp-273.15).toFixed(2);
                let feel=(data.main.feels_like-273.15).toFixed(2);
                let mintemp=(data.main.temp_min-273.15).toFixed(2);
                let maxtemp=(data.main.temp_max-273.15).toFixed(2);
                let d=new Date();
                var p=d.getTimezoneOffset();
                p=p*60*1000;
                let gmt=d.getTime()+(p);
              
                let m=gmt+((data.timezone)*1000);
               
                let a=new Date(m);
         
                   
                    let hour=a.getHours();
                    let min=a.getMinutes();
                    let sec=a.getSeconds();

                
                
        
                document.querySelector(".city").innerHTML=`${data.name} , ${data.sys.country}`;
                document.querySelector(".humidity").innerHTML=`Humidity: ${data.main.humidity}%`
                document.querySelector(".temp").innerHTML=`${temp}&#176C`;
                document.querySelector(".feel").innerHTML=`<span class="feel">Feels Like :${feel}&#176C</span>`;
                document.querySelector(".min-max").innerHTML=`Min: ${mintemp}&#176C | Max: ${maxtemp}&#176C `;
                document.querySelector(".con").innerHTML=`${data.weather[0].description}`;
                document.querySelector(".icon img").src="http://openweathermap.org/img/wn/11d@2x.png"
                let wid=data.weather[0].id;
               


                if(wid<250){
                    document.querySelector("body").style.backgroundImage=`url('Thunderstrome1.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/11n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/11d@2x.png"
                    }
                }
                else if(wid<350||(520==wid || wid==531|| wid==522 )){
                    if((520==wid || wid==531|| wid==522 )){
                        document.querySelector("body").style.backgroundImage=`url('rain.jpg')`
                    }
                    else{
                        document.querySelector("body").style.backgroundImage=`url('drizzle.jpg')`
                    }
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/09n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/09d@2x.png"
                    }
                }
                else if(wid<505){
                    document.querySelector("body").style.backgroundImage=`url('rain.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/10n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/10d@2x.png"
                    }
                }
                else if(wid<630 ||(wid==511)){
                    if(wid==511){
                        document.querySelector("body").style.backgroundImage=`url('rain.jpg')`
                    }
                    else{
                        document.querySelector("body").style.backgroundImage=`url('snow.jpg')`
                    }
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/13n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/13d@2x.png"
                    }
                }
                else if(wid<800){
                    
                    if(wid==701){
                        document.querySelector("body").style.backgroundImage=`url('mist.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }


                    if(wid==711){
                        document.querySelector("body").style.backgroundImage=`url('smoke.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                    if(wid==721){
                        
                    if(hour>17 || hour<6){
                        document.querySelector("body").style.backgroundImage=`url('haze n.jpg')`
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector("body").style.backgroundImage=`url('haze.jpg')`
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                    if(wid==731){
                        document.querySelector("body").style.backgroundImage=`url('dust.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                    if(wid==741){
                        document.querySelector("body").style.backgroundImage=`url('frog.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }

                    if(wid==751){
                        document.querySelector("body").style.backgroundImage=`url('sand.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                    if(wid==761){
                        document.querySelector("body").style.backgroundImage=`url('dust.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                    if(wid==762){
                        document.querySelector("body").style.backgroundImage=`url('ash.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                    if(wid==771){
                        document.querySelector("body").style.backgroundImage=`url('sq.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                    if(wid==781){
                        document.querySelector("body").style.backgroundImage=`url('turnado.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/50d@2x.png"
                    }
                    }
                }
                else if(wid==800){
                    
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/01n@2x.png"
                        document.querySelector("body").style.backgroundImage=`url('clear night.jpg')`
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/01d@2x.png"
                        document.querySelector("body").style.backgroundImage=`url('clear sky.jpg')`
                    }
                }
                else if(wid==801){

                    if(hour>17 || hour<6){
                        document.querySelector("body").style.backgroundImage=`url('cloud n.jpg')`
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/02n@2x.png"
                    }
                    else{
                        document.querySelector("body").style.backgroundImage=`url('cloud.jpg')`
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/02d@2x.png"
                    }
                }
                else if(wid==802){
                    document.querySelector("body").style.backgroundImage=`url('cloud.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/03n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/03d@2x.png"
                    }
                }
                else if(wid==803 || wid==804){
                    document.querySelector("body").style.backgroundImage=`url('cloud.jpg')`
                    if(hour>17 || hour<6){
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/04n@2x.png"
                    }
                    else{
                        document.querySelector(".icon img").src="http://openweathermap.org/img/wn/04d@2x.png"
                    }
                }
                else{
                    document.querySelector(".icon img").src="";
                }
               
                
                    var g=new Date();
                    var n=g.getTimezoneOffset();
              
                n=n*60*1000;
                let gmt1=g.getTime()+(n);

                
                
                let m1=gmt1+((data.timezone)*1000);
             
                let a1=new Date(m1);
                
                    let am_pm;
                    let hours=a1.getHours();
                    let mins=a1.getMinutes();
                    let secs=a1.getSeconds();

                    let hs;
                    
                    if(hours>12){
                        hs=hours-12;
                        am_pm=`PM`;
                        if(hs<10){
                            hs=hs;
                           
                            }
                            else{
                                hs=hs;
                                
                            }
                    }
                    else if(hours==12){
                        hs=hours;
                        am_pm=`PM`;
                       
                    }
                    else{
                        am_pm=`AM`;
                        if(hours<10){
                            hs=`${hours}`;
                            
                            }
                            else{
                                hs=`${hours}`;
                                
                            }
                    }

                    
                    if(secs<10){
                        secs=`0${secs}`;
                        
                        
                    }
                    else{
                        secs=secs;
                        
                        
                    }
                    if(mins<10){
                        mins=`0${mins}`;
                     
                        }
                        else{
                            mins=`${mins}`;
                      
                        }
                        
                        
                        let date1=a1.getDate();
                      
                        
                        let days1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        let month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                        document.querySelector(".date").innerHTML = `${date1} ${month1[a1.getMonth()]} , ${days1[a1.getDay()]}  `;
                        document.querySelector("#y").innerHTML = ` ${data.name}'s Time:`;
                        document.querySelector("#t").innerHTML = ` ${hs}:${mins}:${secs} ${am_pm} `;
                }
                myVar= setInterval(check,1000);
                
                let sunrise=sunTime(data.sys.sunrise,"rise",data.timezone)
                let sunset=sunTime(data.sys.sunset,"set",data.timezone)
            
            })
            .catch((error)=>{
                document.querySelector("body").style.backgroundImage=`url('pic1.jpg')`
                document.querySelector("#input").value="";
                document.querySelector(".card-action").style.display="none";
                console.log(error)
                showalert("City is not found","alert-danger")
            })
}
function stop(){
    clearInterval(myVar)
}

function showalert(message,cls){
    let div=document.createElement("div");
    div.className=`alert ${cls} a`;
    div.innerHTML=` ${message}`;
    let row=document.querySelector(".b");
    let e=document.querySelector(".c");
    row.insertBefore(div,e)
    setTimeout(()=>{
        div.style.display="none"
    },1000)
}
function sunTime(e,b,c){
    var ab=new Date();
    var mn=ab.getTimezoneOffset();
   
    mn=mn*60*1000;
    let gmt2=(e*1000)+(mn);



    let m2=gmt2+((c)*1000);
    let date=new Date(m2);
     
                let am;
                let h=date.getHours();
                let m=date.getMinutes();
                let s=date.getSeconds();
              
                let hu;
                
                if(h>11){
                    

                    if(h==12){
                        hu=h;
                        am=`PM`;
                    } 
                    else{
                        hu=h-12;
                        am=`PM`;
                    
                    }   
                }
                else{
                   
                    am=`AM`;
                    
                        hu=h;
                        
                        
                        
                        
                }

                
                if(s<10){
                    s=`0${s}`;
                    
                    
                }
                else{
                    s=s;

                }
                if(m<10){
                    m=`0${m}`;
                    
                    }
                else{
                    m=m;
                    
                }
                
                document.querySelector(`.${b}`).innerHTML=` ${hu}:${m}:${s} ${am}`
}

