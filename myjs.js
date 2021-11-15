{
    window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        })
}    
{
    var side1 = document.getElementById("side1")
        window.addEventListener("scroll", function(){
            side1.style.left = -window.pageYOffset + "px";
        })
        var side2 = document.getElementById("side2")
            window.addEventListener("scroll", function () {
                side2.style.left = window.pageYOffset + "px";
        })
}
{
    var side1 = document.getElementById("side1")
        window.addEventListener("scroll", function(){
            side1.style.left = -window.pageYOffset + "px";
        })
        var side2 = document.getElementById("side2")
            window.addEventListener("scroll", function () {
                side2.style.left = window.pageYOffset + "px";
            })
}
