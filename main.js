window.onload = function() {
    document.body.classList.remove("active");
}

$("a").click(function () {
    document.body.classList.add("active");
})