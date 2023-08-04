const toolSlide = document.getElementById("toolslide");
const toolctx = toolSlide.getContext("2d");
let tools = document.querySelector(".tools");
toolctx.imageSmoothingQuality = "high";
console.log(toolctx)
toolSlide.width = tools.clientWidth;
toolSlide.height = tools.clientHeight;
const toolW = toolSlide.width;
const toolH = toolSlide.height;
let toolSlideDepth = toolW * toolH;
function getpercent(num, percent) {
    return (percent / 100) * num;
}
const toolsImage = [
    "img/tools/devicon_c.svg",
    "img/tools/devicon_php.svg",
    "img/tools/logos_bash.svg",
    "img/tools/logos_figma.svg",
    "img/tools/logos_python.svg",
    "img/tools/logos_react.svg",
    "img/tools/logos_vue.svg",
]
let toolsCanvas = [];
class SlidetoolS {
    constructor(image, x, inter) {
        this.image = image;
        this.x = x;
        this.px = x;
        this.inter = inter;
        this.y = getpercent(toolH, 25);
        this.height = getpercent(toolH, 50);
        this.imagesize = getpercent(toolH, 50);
        this.size = getpercent(toolH, 35);
    }
    drawImage() {
        if (this.inter == 0 || this.inter == 4) {
            this.px = this.x + this.y/2;
            this.y = this.y + this.imagesize/3.8;
            this.imagesize = getpercent(toolH, 25);
            this.size = getpercent(toolH, 25);
        } else if (this.inter == 1 || this.inter == 3) {
            this.px = this.x + this.y/4;
            this.y = this.y + this.imagesize/6;
            this.imagesize = getpercent(toolH, 35);
            this.size = getpercent(toolH, 30);
        }

        const img = new Image();

        const gradient = toolctx.createRadialGradient(this.x + this.height/2, this.height, 0, this.x + this.height/2, this.height, this.size);

        gradient.addColorStop(0.65, "rgba(254, 207, 255, 0.10)");
        gradient.addColorStop(1, "rgba(246, 78, 250, 0.03)");

        toolctx.fillStyle = gradient;
        toolctx.strokeStyle = "#A182AB";
        toolctx.beginPath();
        toolctx.arc(this.x + this.height / 2, this.height, this.size, 0, Math.PI * 2);
        toolctx.fill();
        toolctx.stroke();

        img.onload = (e) => {
            toolctx.drawImage(img, this.px, this.y, this.imagesize, this.imagesize);
        }
        img.src = this.image;
    }
    update() {
        this.drawImage();
    }
}

let j = 0;
function initImage() {
    let i;
    for (i = 0; i < 5; i++, j += 1) {
        if (j >= toolsImage.length) {
            j = 0;
        }
        if (i == 0 || i == 4) {
            toolsCanvas.push(new SlidetoolS(toolsImage[j], (getpercent(toolW, 20) * i) + getpercent(toolW, 5), i));
        } else if (i == 1 || i == 3) {
            toolsCanvas.push(new SlidetoolS(toolsImage[j], (getpercent(toolW, 20) * i) + getpercent(toolW, 5), i));
        } else {
            toolsCanvas.push(new SlidetoolS(toolsImage[j], (getpercent(toolW, 20) * i) + getpercent(toolW, 5), i));
        }
    }
    j = j;
}
function AnimateSlide() {
    toolsCanvas = [];
    initImage();

    toolctx.clearRect(0, 0, toolSlide.width, toolSlide.height);
    for (let i = 0; i < toolsCanvas.length; i++) {
        toolsCanvas[i].update();
    }
}
AnimateSlide();
setInterval(() => {
    AnimateSlide();
}, 2000)
