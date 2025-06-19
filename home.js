// flash

var wid, hei;

var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");

var girlbox1 = document.getElementById("girlbox1");
var girlbox2 = document.getElementById("girlbox2");
var girl1 = document.getElementById("girl1");
var girl2 = document.getElementById("girl2");
var dialog1 = document.getElementById("dialog1");
var dialog2 = document.getElementById("dialog2");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var vertical;
var originTop1, originTop2;

var star = document.getElementById("star");

var col1 = document.getElementById("col1");
var col2 = document.getElementById("col2");
var col3 = document.getElementById("col3");

var des1 = document.getElementById("des1");
var des2 = document.getElementById("des2");
var des3 = document.getElementById("des3");

var columns = document.getElementById("columns");

const $flash = (removePage, showPage) => {
    var wrap = document.getElementById("wrap");
    wrap.classList.add("shutterClick");
    setTimeout(function() {
        showPage.classList.add("active");
        removePage.classList.remove("active");
    }, 200);
    setTimeout(function() {
        wrap.classList.remove("shutterClick");
    }, 600);
}

// 加载动画

var cx = Math.random() * 10 + 10,
    cy = Math.random() * 10 + 10;
// var cx = 20,
// cy = 20;
// console.log(document.body.clientWidth);
// star.style.left = (document.body.clientWidth / 2 - 100) + "px";
// star.style.top = (document.body.clientHeight / 2 - 100) + "px";
var loadingAnimation = setInterval(() => {
    // console.log(star.style.left + Math.random() * 10 + "px");
    star.style.left = (parseInt(star.style.left) + Math.random() * cx + cx) + "px";
    star.style.top = (parseInt(star.style.top) + Math.random() * cy + cy) + "px";
    // star.style.left = "100px";
    if (parseInt(star.style.left) < 0) {
        cx = Math.abs(cx);
    }
    if (parseInt(star.style.top) < 0) {
        cy = Math.abs(cy);
    }
    if (parseInt(star.style.left) + 200 > document.body.clientWidth) {
        cx = -Math.abs(cx);
    }
    if (parseInt(star.style.top) + 200 > document.body.clientHeight) {
        cy = -Math.abs(cy);
    }
}, 50);

// setTimeout(() => {
//     // alert();
//     LoadingFade();
// }, 3000);
LoadingFade()

function LoadingFade() {
    var loadingPage = document.getElementById("loading");
    var candida = document.getElementById("candida");
    var slowingDown = setInterval(() => {
        cx = cx / 2;
        cy = cy / 2;
    }, 100);
    setTimeout(() => {
        clearInterval(loadingAnimation);
        clearInterval(slowingDown);
        var flashing = setInterval(() => {
            star.classList.add("hide");
            setTimeout(() => {
                star.classList.remove("hide");
            }, 200);
        }, 400);
        candida.classList.add("show");
        candida.style.left = (parseInt(star.style.left) + 50) + "px";
        candida.style.top = (parseInt(star.style.top) + 75) + "px";
        setTimeout(() => {
            clearInterval(flashing);
            $flash(loadingPage, page1);
            setTimeout(() => {
                loadingPage.style.display = "none";
                LayoutPage1();
                LayoutPage2();
                LayoutPage5();
            }, 300);
        }, 1200);
    }, 1500);
}





// 页面布局


function LayoutPage1() {
    wid = document.body.clientWidth;
    hei = document.body.clientHeight;
    var logo = document.getElementById("logo");
    // console.log(logo.clientHeight);
    logo.style.top = (hei - logo.clientHeight) / 2.5 + "px";
}

function LayoutPage2() {
    wid = document.body.clientWidth;
    hei = document.body.clientHeight;
    vertical = (wid / hei < 1.33);
    if (vertical) {
        girlbox1.style.width = (wid - 10 + "px");
        girlbox1.style.height = (0.5 * hei - 10 + "px");
        girlbox2.style.width = (wid - 10 + "px");
        girlbox2.style.height = (0.5 * hei - 10 + "px");
        girlbox1.style.top = 0;
        girlbox1.style.left = 0;
        girlbox2.style.left = 0;
        girlbox2.style.top = (0.5 * hei + "px");
        girlbox1.classList.add("horizontal");
        girlbox2.classList.add("horizontal");
        girlbox1.classList.remove("vertical");
        girlbox2.classList.remove("vertical");

        // dialog box
        dialog1.style.left = (0.05 * wid + girl1.clientWidth + "px");
        originTop1 = (girlbox1.clientHeight - girl1.clientHeight) / 2;
        dialog1.style.width = (0.9 * wid - girl1.clientWidth + "px");
        dialog1.style.height = (text1.clientHeight + "px");
        dialog2.style.right = (0.05 * wid + girl2.clientWidth + "px");
        originTop2 = (girlbox2.clientHeight - girl2.clientHeight) / 2;
        dialog2.style.width = (0.9 * wid - girl2.clientWidth + "px");
        dialog2.style.height = (text2.clientHeight + "px");


    } else {
        girlbox1.style.width = (0.5 * wid - 10 + "px");
        girlbox1.style.height = (hei - 10 + "px");
        girlbox2.style.width = (0.5 * wid - 10 + "px");
        girlbox2.style.height = (hei - 10 + "px");
        girlbox1.style.top = 0;
        girlbox1.style.left = 0;
        girlbox2.style.top = 0;
        girlbox2.style.left = (0.5 * wid + "px");
        girlbox1.classList.add("vertical");
        girlbox2.classList.add("vertical");
        girlbox1.classList.remove("horizontal");
        girlbox2.classList.remove("horizontal");

        // dialog box
        dialog1.style.left = (0.05 * wid + girl1.clientWidth + "px");
        originTop1 = (girlbox1.clientHeight - girl1.clientHeight) / 2;
        dialog1.style.width = (0.4 * wid - girl1.clientWidth + "px");
        dialog1.style.height = (text1.clientHeight + "px");
        dialog2.style.right = (0.05 * wid + girl2.clientWidth + "px");
        originTop2 = (girlbox2.clientHeight - girl2.clientHeight) / 2;
        dialog2.style.width = (0.4 * wid - girl2.clientWidth + "px");
        dialog2.style.height = (text2.clientHeight + "px");
    }
}


function LayoutPage3() {
    wid = document.body.clientWidth;
    hei = document.body.clientHeight;
    rows = document.querySelectorAll(".row");
    texts = document.querySelectorAll(".row .text");
    // vertical = (wid / hei < 1.33);
    // if (vertical) {
    //     [].forEach.call(rows, function(row) {
    //         row.classList.add("small");
    //     });
    //     [].forEach.call(texts, function(text) {
    //         text.style.top = wid * 0.3 + 30 + "px";
    //     });
    // }
}


function LayoutPage5() {
    var img = document.getElementById("img1");
    var heading = document.getElementById("heading1");
    columns.style.height = img.clientHeight + heading.clientHeight + "px";
}



// 按钮事件

function func1() {

    $flash(page1, page2);
    setTimeout(() => {
        LayoutPage2();
        document.documentElement.scrollTop = page2.offsetTop;
    }, 400);
}

function func2() {
    $flash(page1, page2);
}

function func3() {
    $flash(page3, page4);
}

window.onresize = function() {
    LayoutPage1();
    LayoutPage2();
    LayoutPage3();
    LayoutPage5();

}

document.addEventListener("scroll", function() {
    wid = document.body.clientWidth;
    hei = document.body.clientHeight;
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop + hei - page2.offsetTop < 0) {
        // page1.classList.add("active");
        // page2.classList.remove("active");
    } else if (scrollTop + hei - page3.offsetTop < 0) {
        page1.classList.remove("active");
        page2.classList.add("active");
        page3.classList.remove("active");
    } else if (scrollTop - page3.offsetTop < 0) {
        page2.classList.add("active");
    } else if (scrollTop + hei - page4.offsetTop < 0) {
        page2.classList.remove("active");
        page3.classList.add("active");
        page4.classList.remove("active");
    } else {
        page3.classList.remove("active");
        page4.classList.add("active");
    }


    if (page2.classList.contains("active")) {
        var value = scrollTop - page2.offsetTop;
        if (value > 0 && value < parseInt(page2.style.height)) {
            girlbox1.style.position = "fixed";
            girlbox2.style.position = "fixed";
        } else {
            girlbox1.style.position = "absolute";
            girlbox2.style.position = "absolute";
        }

        if (vertical) {
            if (value >= 0 && value < 600) {
                dialog1.style.top = originTop1 + 50 - value / 12 + "px";
                dialog1.style.opacity = value / 6 + "%";

            } else if (value < 0) {
                dialog1.style.opacity = 0;
            } else {
                dialog1.style.opacity = "100%"
            }

            if (value >= 1200 && value < 1800) {
                dialog2.style.top = originTop2 + 150 - value / 12 + "px";
                dialog2.style.opacity = (value - 1200) / 6 + "%";
                dialog1.style.top = originTop1 + 100 - value / 12 + "px";
                dialog1.style.opacity = (1800 - value) / 6 + "%";
            } else if (value < 1200) {
                dialog2.style.opacity = 0;
            } else {
                dialog2.style.opacity = "100%";
                dialog1.style.opacity = 0;
            }

            if (value >= 2400 && value < 3000) {
                dialog2.style.top = originTop2 + 200 - value / 12 + "px";
                dialog2.style.opacity = (3000 - value) / 6 + "%";
            } else if (value > 3000) {
                dialog2.style.opacity = 0;
            }
        } else {
            if (value >= 400 && value < 800) {
                dialog1.style.top = originTop1 + 100 - value / 8 + "px";
                dialog1.style.opacity = (value - 400) / 4 + "%";

            } else if (value < 400) {
                dialog1.style.opacity = 0;
            } else {
                dialog1.style.opacity = "100%"
            }

            if (value >= 1300 && value < 1700) {
                dialog2.style.top = originTop2 + 212.5 - value / 8 + "px";
                dialog2.style.opacity = (value - 1300) / 4 + "%";
                dialog1.style.top = originTop1 + 162.5 - value / 8 + "px";
                dialog1.style.opacity = (1700 - value) / 4 + "%";
            } else if (value < 1300) {
                dialog2.style.opacity = 0;
            } else {
                dialog2.style.opacity = "100%";
                dialog1.style.opacity = 0;
            }

            if (value >= 2400 && value < 2800) {
                dialog2.style.top = originTop2 + 300 - value / 8 + "px";
                dialog2.style.opacity = (2800 - value) / 4 + "%";
            } else if (value > 2800) {
                dialog2.style.opacity = 0;
            }


            if (value > 0 && value < 600) {
                girlbox1.style.width = ((0.5 + value / 600 * 0.2) * wid - 10 + "px");
                girlbox2.style.width = ((0.5 - value / 600 * 0.2) * wid - 10 + "px");
                girlbox2.style.left = ((0.5 + value / 600 * 0.2) * wid + "px");
            }
            if (value > 1200 && value < 1800) {
                girlbox1.style.width = ((0.5 + (1500 - value) / 300 * 0.2) * wid - 10 + "px");
                girlbox2.style.width = ((0.5 - (1500 - value) / 300 * 0.2) * wid - 10 + "px");
                girlbox2.style.left = ((0.5 + (1500 - value) / 300 * 0.2) * wid + "px");
            }
            if (value > 2400 && value < 3000) {
                girlbox1.style.width = ((0.5 + (value - 3000) / 600 * 0.2) * wid - 10 + "px");
                girlbox2.style.width = ((0.5 - (value - 3000) / 600 * 0.2) * wid - 10 + "px");
                girlbox2.style.left = ((0.5 + (value - 3000) / 600 * 0.2) * wid + "px");
            }
        }
    } else if (page3.classList.contains("active")) {

    } else if (page4.classList.contains("active")) {
        var dias = document.querySelectorAll("#page4 .dia");
        [].forEach.call(dias, function(dia) {
            if (!dia.classList.contains("show") && scrollTop + hei - page4.offsetTop - dia.offsetTop > 50) {
                dia.classList.add("show");
            }
        })
    }
})




// 关于对话框的一点建议：参照Leiden，改为css中的border-image-source

function func4() {


    var img = document.getElementById("img1");
    var heading = document.getElementById("heading1");
    col1.classList.add("show");
    col2.classList.remove("show");
    col3.classList.remove("show");
    des1.style.top = -img.clientHeight + "px";
    des1.style.height = img.clientHeight + heading.clientHeight + "px";
    des2.style.top = 0;
    des3.style.top = 0;
}

function func5() {

    var img = document.getElementById("img1");
    var heading = document.getElementById("heading1");
    col1.classList.remove("show");
    col2.classList.add("show");
    col3.classList.remove("show");
    des1.style.top = 0;
    des2.style.top = -img.clientHeight + "px";
    des2.style.height = img.clientHeight + heading.clientHeight + "px";
    des3.style.top = 0;
}

function func6() {

    var img = document.getElementById("img1");
    var heading = document.getElementById("heading1");
    col1.classList.remove("show");
    col2.classList.remove("show");
    col3.classList.add("show");
    des1.style.top = 0;
    des2.style.top = 0;
    des3.style.top = -img.clientHeight + "px";
    des3.style.height = img.clientHeight + heading.clientHeight + "px";

}