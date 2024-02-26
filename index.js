const clear = document.getElementById("clear")
const dot = document.querySelectorAll(".dot");
const box = document.querySelectorAll(".box");
const send = document.querySelector(".send")
const fourthBox = document.querySelector(".box-none")
const three = document.getElementById("three")

clear.addEventListener("click", function(){
    send.style.display = "none"
    fourthBox.style.marginBottom = "10px";
    three.style.display = "none"
    box.forEach(function(item){
        item.style.backgroundColor = "white"
    })
    dot.forEach(function(item){
            item.style.display = "none"
    })
})