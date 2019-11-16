window.onload = function() {
    document.body.classList.remove("active")

    var bg = document.getElementById("background");
    if (bg) {
        bg.style.backgroundImage = "url(/files/bg_" + Math.round(this.Math.random() * 5) + ".jpg)"
    }

}

$("a").not("[href*=com]").not("[href*=mosbacher-berg]").not("[href$=pdf]").click(function () {
    document.body.classList.add("active")
}) 