const skillSlide = document.getElementById("skillslide");
const skillctx = skillSlide.getContext("2d");
let t = document.querySelector(".tools");
skillSlide.width = t.clientWidth;
skillSlide.height = t.clientHeight;
const skillW = skillSlide.width;
const skillH = skillSlide.height;
let skillSlideDepth = skillW * skillH;
function getpercent(num, percent) {
    return (percent / 100) * num;
}
const skillsImage = [
    "img/tools/devicon_c.svg",
    "img/tools/devicon_php.svg",
    "img/tools/logos_bash.svg",
    "img/tools/logos_figma.svg",
    "img/tools/logos_python.svg",
    "img/tools/logos_react.svg",
    "img/tools/logos_vue.svg",
]
let skillsCanvas = [];
class SlideSkillS {
    constructor(image, x, inter) {
        this.image = image;
        this.x = x;
        this.px = x;
        this.inter = inter;
        this.y = getpercent(skillH, 25);
        this.height = getpercent(skillH, 50);
        this.imagesize = getpercent(skillH, 50);
        this.size = getpercent(skillH, 35);
    }
    drawImage() {
        if (this.inter == 0 || this.inter == 4) {
            this.px = this.x + this.y/2;
            this.y = this.y + this.imagesize/3.8;
            this.imagesize = getpercent(skillH, 25);
            this.size = getpercent(skillH, 25);
        } else if (this.inter == 1 || this.inter == 3) {
            this.px = this.x + this.y/4;
            this.y = this.y + this.imagesize/6;
            this.imagesize = getpercent(skillH, 35);
            this.size = getpercent(skillH, 30);
        }

        const img = new Image();
        img.onload = (e) => {
            const gradient = skillctx.createRadialGradient(this.x + this.height/2, this.height, 0, this.x + this.height/2, this.height, this.size);

            gradient.addColorStop(0.65, "rgba(254, 207, 255, 0.10)");
            gradient.addColorStop(1, "rgba(246, 78, 250, 0.03)");

            skillctx.fillStyle = gradient;
            skillctx.strokeStyle = "#A182AB";
            skillctx.beginPath();
            skillctx.arc(this.x + this.height / 2, this.height, this.size, 0, Math.PI * 2);
            skillctx.fill();
            skillctx.stroke();
            skillctx.drawImage(img, this.px, this.y, this.imagesize, this.imagesize);
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
        if (j >= skillsImage.length) {
            j = 0;
        }
        if (i == 0 || i == 4) {
            skillsCanvas.push(new SlideSkillS(skillsImage[j], (getpercent(skillW, 20) * i) + getpercent(skillW, 5), i));
        } else if (i == 1 || i == 3) {
            skillsCanvas.push(new SlideSkillS(skillsImage[j], (getpercent(skillW, 20) * i) + getpercent(skillW, 5), i));
        } else {
            skillsCanvas.push(new SlideSkillS(skillsImage[j], (getpercent(skillW, 20) * i) + getpercent(skillW, 5), i));
        }
    }
    j = j;
}
function AnimateSlide() {
    skillsCanvas = [];
    initImage();

    skillctx.clearRect(0, 0, skillSlide.width, skillSlide.height);
    for (let i = 0; i < skillsCanvas.length; i++) {
        skillsCanvas[i].update();
    }
}
setInterval(() => {
    AnimateSlide();
}, 1000)
