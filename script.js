var istatus = document.querySelector("h5")

var btn = document.querySelector("#Add")

 var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "friends"
        istatus.style.color = "green"
        btn.innerHTML= "Remove Friends"
        check = 1
        }
    else{   
        istatus.innerHTML = "stanger"
        istatus.style.color = "Red"
        btn.innerHTML= "Add Friends"
        check = 0
    }
    
})
