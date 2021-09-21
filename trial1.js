// document.documentElement.scrollTop

const $setJumpNumber = (startNum, targetNum, time = 40, element, bits) => {

    /*
     * startNum 代表要跳动的初始数字
     * targetNum 代表要跳动到的数字
     * time  代表跳动间隔
     * element 代表要跳动的元素
     * bits 代表输出小数位数
     */
    let dom = element;
    let originNum = startNum;
    let stepNum = parseInt(targetNum - startNum) / 20;
    let timeNum = time;
    dom.innerHTML = startNum;

    let timeId = setInterval(() => {
        if (originNum + stepNum < targetNum) {
            timeNum -= 0.001;
            // let strNum = originNum.toString();
            // 数字比较少的时候直接用 + 1; 数字很大直接 +1 要很久才能调到最对应的数字，所有后三位数随机跳动的方式进行模拟生成
            // stepNum += 1; // 这样才可以实现越跳越快的效果
            originNum = originNum + stepNum;
            dom.innerHTML = parseFloat(originNum).toFixed(bits);
        } else {
            dom.innerHTML = targetNum;
            clearInterval(timeId);
        }
    }, timeNum);
};


document.addEventListener("scroll", function() {
    var value = document.documentElement.scrollTop;
    var frame1 = document.getElementById("frame1");
    var frame2 = document.getElementById("frame2");
    var frame3 = document.getElementById("frame3");
    var number1 = document.getElementById("number1");
    // var detail1 = document.getElementById("detail1");
    // console.log(document.documentElement.scrollTop);
    if (value < 500) {
        frame1.style.top = (150 - value * 0.2) + "px";
        frame1.style.opacity = value * 0.2 + "%";
    }
    if (value < 1200) {
        frame3.style.opacity = 0;
    }
    if (value > 1200 && value < 1700) {
        frame3.style.top = (300 - (value - 1200) * 0.2) + "px";
        frame3.style.opacity = (value - 1200) * 0.2 + "%";
        if (number1.classList.contains("unshown")) {
            number1.classList.remove("unshown");
            $setJumpNumber(0, 96.58, 40, number1, 2);
        }
    }
    if (value < 400) {
        frame2.style.opacity = 0;
    }
    if (value > 400 && value < 900) {
        frame2.style.top = (150 - (value - 400) * 0.2) + "px";
        frame2.style.opacity = (value - 400) * 0.2 + "%";
    }
    // frame2.addEventListener("mouseenter", function() {
    //     detail1.style.transform = "scaleY(1)";
    //     // detail1.style.height = "auto";
    //     detail1.style.transition = "transform 0.5s";
    //     detail1.style.display = "flex";

    // })

})