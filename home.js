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

function LayoutPage2() {
    var wid = document.body.clientWidth;
    var hei = document.body.clientHeight;
    var girlbox1 = document.getElementById("girlbox1");
    var girlbox2 = document.getElementById("girlbox2");
    var girl1 = document.getElementById("girl1");
    var girl2 = document.getElementById("girl2");
    var dia1 = document.getElementById("dia1");
    var dia2 = document.getElementById("dia2");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    if (wid / hei < 1.33) {
        girlbox1.style.width = (wid - 10 + "px");
        girlbox1.style.height = (0.5 * hei - 10 + "px");
        girlbox2.style.width = (wid - 10 + "px");
        girlbox2.style.height = (0.5 * hei - 10 + "px");
        girlbox2.style.left = 0;
        girlbox2.style.top = (0.5 * hei + "px");
        girlbox1.classList.add("horizontal");
        girlbox2.classList.add("horizontal");
        girlbox1.classList.remove("vertical");
        girlbox2.classList.remove("vertical");
        dia1.style.left = (0.05 * wid + girl1.width + "px");
        dia1.style.width = (0.9 * wid - girl1.width + "px");
        dia1.style.height = (2 * text1.offsetHeight + "px");
        text1.style.paddingTop = (0.5 * text1.offsetHeight + "px");
        // dia1.style.height = (0.15 * hei + "px");
        // dia2.style.height = (0.15 * hei + "px");
    } else {
        girlbox1.style.width = (0.5 * wid - 10 + "px");
        girlbox1.style.height = (hei - 10 + "px");
        girlbox2.style.width = (0.5 * wid - 10 + "px");
        girlbox2.style.height = (hei - 10 + "px");
        girlbox2.style.top = 0;
        girlbox2.style.left = (0.5 * wid + "px");
        girlbox1.classList.add("vertical");
        girlbox2.classList.add("vertical");
        girlbox1.classList.remove("horizontal");
        girlbox2.classList.remove("horizontal");
    }
}




function func1() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    $flash(page1, page2);
    setTimeout(() => {
        LayoutPage2();
    }, 400);
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
        LayoutPage2();
    }

}

document.addEventListener("scroll", function() {
    var value = document.documentElement.scrollTop;
    var girlbox1 = document.getElementById("girlbox1");
    var girlbox2 = document.getElementById("girlbox2");
    var wid = document.body.clientWidth;
    var hei = document.body.clientHeight;
    // console.log(value);
    if (value > 100 && value < 800) {
        girlbox1.style.width = ((0.5 + (value - 100) / 700 * 0.16) * wid - 10 + "px");
        girlbox2.style.width = ((0.5 - (value - 100) / 700 * 0.16) * wid - 10 + "px");
        girlbox2.style.left = ((0.5 + (value - 100) / 700 * 0.16) * wid + "px");
    }
})