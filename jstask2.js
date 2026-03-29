let btn = document.getElementById("button");
btn.addEventListener("click",
    function(){
        document.body.classList.toggle("dark-mode");
    }
)
let topBtn=document.getElementById("topbtn");
topBtn.onclick = function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};