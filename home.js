// flash

const $flash = (removePage, showPage) => {
    var wrap = document.getElementById("wrap");
    wrap.classList.add("shutterClick");
    setTimeout(function() {
        showPage.classList.add("active");
        removePage.classList.remove("active");
    }, 300);
    setTimeout(function() {
        wrap.classList.remove("shutterClick");
    }, 600);
}




function func1() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    $flash(page1, page2);
    var wid = document.body.clientWidth - 20;
    var hei = document.body.clientHeight;
    var girl1 = document.getElementById("girl1");
    var girl2 = document.getElementById("girl2");
    if (wid / hei < 1.33) {
        girl1.style.width = (wid - 10 + "px");
        girl1.style.height = (0.5 * hei - 10 + "px");
        girl2.style.width = (wid - 10 + "px");
        girl2.style.height = (0.5 * hei - 10 + "px");
        girl2.style.left = 0;
        girl2.style.top = (0.5 * hei + "px");
        girl1.classList.add("horizontal");
        girl2.classList.add("horizontal");
        girl1.classList.remove("vertical");
        girl2.classList.remove("vertical");
    } else {
        girl1.style.width = (0.5 * wid - 5 + "px");
        girl1.style.height = (hei - 10 + "px");
        girl2.style.width = (0.5 * wid - 5 + "px");
        girl2.style.height = (hei - 10 + "px");
        girl2.style.left = (0.5 * wid + "px");
        girl2.style.top = 0;
        girl1.classList.add("vertical");
        girl2.classList.add("vertical");
        girl1.classList.remove("horizontal");
        girl2.classList.remove("horizontal");
    }
}

function func2() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    console.log(page1);
    $flash(page1, page2);
}

window.onresize = function() {
    var wid = document.body.clientWidth;
    var hei = document.body.clientHeight;
    var page2 = document.getElementById("page2");
    if (page2.classList.contains("active")) {
        var girl1 = document.getElementById("girl1");
        var girl2 = document.getElementById("girl2");
        if (wid / hei < 1.33) {
            girl1.style.width = (wid - 10 + "px");
            girl1.style.height = (0.5 * hei - 10 + "px");
            girl2.style.width = (wid - 10 + "px");
            girl2.style.height = (0.5 * hei - 10 + "px");
            girl2.style.left = 0;
            girl2.style.top = (0.5 * hei + "px");
            girl1.classList.add("horizontal");
            girl2.classList.add("horizontal");
            girl1.classList.remove("vertical");
            girl2.classList.remove("vertical");
        } else {
            girl1.style.width = (0.5 * wid - 10 + "px");
            girl1.style.height = (hei - 10 + "px");
            girl2.style.width = (0.5 * wid - 10 + "px");
            girl2.style.height = (hei - 10 + "px");
            girl2.style.top = 0;
            girl2.style.left = (0.5 * wid + "px");
            girl1.classList.add("vertical");
            girl2.classList.add("vertical");
            girl1.classList.remove("horizontal");
            girl2.classList.remove("horizontal");
        }
    }
}