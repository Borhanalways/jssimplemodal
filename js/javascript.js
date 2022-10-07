let wrapper = document.getElementById("wrapper")
let popupBtn = document.getElementById("popup")
let close = document.getElementById("close")

popupBtn.addEventListener("click", function(){
    wrapper.style.display = "block"
});

close.addEventListener("click", function(){
    wrapper.style.display = "none"
});