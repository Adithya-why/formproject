const btn = document.querySelector("button");
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");

btn.addEventListener("click",function(e){
    let x,y;
    x = pwd1.value;
    y= pwd2.value;
    if(!(x===y)){
        pwd1.classList.add("error");
        pwd2.classList.add("error")
        t1.innerHTML = "Passwords don't match";
        t2.innerHTML = "Passwords don't match";
    }

    else{
        pwd1.classList.remove("error");
        pwd2.classList.remove("error")
        t1.innerHTML = "";
        t2.innerHTML = "";
    }



});