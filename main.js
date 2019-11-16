window.onload = function() {
    document.body.classList.remove("active");
}

$("a[href*=gmbwi]").not("[href$=pdf]").click(function () {
    document.body.classList.add("active");
}) 