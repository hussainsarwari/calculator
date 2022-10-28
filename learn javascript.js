let clear=document.querySelector("#clear");
let one =document.querySelector('#one');
let two =document.querySelector("#two");
let three =document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let resulte=document.querySelector("#resulte");
let nighn=document.querySelector("#nighn");
let sum=document.querySelector("#sum")
let multiply=document.querySelector("#multyply")
let subtraction=document.querySelector("#subtraction")
let equal=document.querySelector("#equal")
let apportion=document.querySelector("#apportion")
var num,num1,num2 ,check;


num=resulte.innerText
one.addEventListener('click', showresulte=>{
    num+=1;
   resulte.innerText+=1
   
})
two.addEventListener('click', showresulte=>{
    num+=2;
    resulte.innerText+=2;
})
three.addEventListener('click', showresulte=>{
    num+=3;
    resulte.innerText+="3";
})
four.addEventListener('click', showresulte=>{
    num+=4;
    resulte.innerText+="4";
})
five.addEventListener('click', showresulte=>{
    num+=5
    resulte.innerText+="5";
})
six.addEventListener('click', showresulte=>{
    num+=6
    resulte.innerText+="6";
})
seven.addEventListener('click', showresulte=>{
    num+=7;
     resulte.innerText+="7";
})
eight.addEventListener('click', showresulte=>{
    num+=8
    resulte.innerText+="8";
})
nighn.addEventListener('click', showresulte=>{
    num+=9
    resulte.innerText+="9";
})

clear.addEventListener("click" ,()=>{
     num="";
     num1="";
     num2=""
    resulte.innerText="";
}) 
sum.addEventListener("click",()=>{
    num1=parseInt(num)
    resulte.innerText="+";

    check=resulte.innerText
})
subtraction.addEventListener("click",()=>{
    num1=parseInt(num)
    
    
    resulte.innerText="-";
    check=resulte.innerText

})
multiply.addEventListener("click",()=>{
    num1=parseInt(num)
    resulte.innerText="x";
    check=resulte.innerText
})
apportion.addEventListener("click",()=>{
    num1=parseInt(num);
    resulte.innerText="/";
    check=resulte.innerText
})
equal.addEventListener("click",()=>{
    calculate();
})




function calculate()
{
    if(check.includes("+")||check.includes("-")||check.includes("x")||check.includes("/")){
       num=resulte.innerText;
        num=num.slice(1);
        num2=parseInt(num);
        if(check.includes("+")){
            resulte.innerHTML=num1+num2;
        }else if (check.includes("-")) {
            resulte.innerHTML=num1-num2;
        } else if(check.includes("x")) {
            resulte.innerHTML=num1*num2;
        }else{
            resulte.innerHTML=num1/num2;
        }
    }

}
