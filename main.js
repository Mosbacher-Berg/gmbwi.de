window.onload = function () {
    document.body.classList.remove("active")

    var bg = document.getElementById("background")
    if (bg) {
        if (this.getCookie("bg")) {
            bg.style.backgroundImage = "url(/files/bg_" + this.getCookie("bg") + ".jpg)"
        } else {
            var random = Math.round(this.Math.random() * 5)
            bg.style.backgroundImage = "url(/files/bg_" + random + ".jpg)"
            this.setCookie("bg", random, 20)
        }
    }
}

window.onpageshow = function () {
    document.body.classList.remove("active")
}

$("a").not("[href*=com]").not("[href*=mosbacher-berg]").not("[href$=pdf]").click(function () {
    document.body.classList.add("active")
})


function setCookie(cname, cvalue, expsec) {
    var maxAgeSegment = "; max-age=" + expsec;
    document.cookie = cname + "=" + cvalue + ";" + maxAgeSegment + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}