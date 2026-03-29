let a = document.getElementById("abcde");
let b = document.getElementById("ab");
a.addEventListener("mouseover",function(){
    a.innerHTML = "Gimmy";
    

});
a.addEventListener("mousedown",function(){
    a.innerHTML = "Dog";
});
setTimeout(function(){
    b.innerHTML = "Welcome to the zooooooo!";
},3000);