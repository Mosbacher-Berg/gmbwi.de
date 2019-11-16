window.onload = function() {
    document.body.classList.remove("active");
}

$("a").not("[href*=com]").not("[href*=mosbacher-berg]").not("[href$=pdf]").click(function () {
    document.body.classList.add("active");
}) 