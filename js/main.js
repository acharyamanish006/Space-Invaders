let bullet = document.getElementById("gun");
let body = document.getElementById("body");
let hero = document.getElementById("mainhero");
let speed = 0; 



    // console.log("hello");
function main(){   
     body.addEventListener("keypress",function(){
        fire();
    })
    function fire(){
        // if(bullet.classList != "animate"){
        //     bullet.classList.add("animate");
        // }
        // setTimeout(function(){
        //     bullet.classList.remove("animate");
        // }, 2000)
        bullet.classList.add("animate");
    }
    bullet.classList.remove("animate");
}


setInterval(main,500);    

function move(){
    let characterTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
}
functione) {
    if (e.keyCode == 38) {
       // up arrow
       console.log("up arrow")
     }
     if (e.keyCode == 40) {
         // down arrow
         console.log("down arrow")
     }
     if (e.keyCode == 37) {
       // left arrow
       console.log("lefy arrow")
     }
     if (e.keyCode == 39) {
       // right arrow
       console.log("right arrow")
     }
   }