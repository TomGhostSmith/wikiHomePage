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
}

function func2() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    console.log(page1);
    $flash(page1, page2);
}