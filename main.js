/** @type {HTMLCanvasElement} */

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var imgGL = new Image();
imgGL.src = 'groveL.png';
var imgGR = new Image();
imgGR.src = 'groveR.png';

var imgFace = new Image();
imgFace.src = 'face.png';

var imgFaceList = ['face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png', 'face6.png', 'face7.png', 'face8.png', 'face9.png', 'face10.png', 'face11.png', 'face12.png', 'face13.png', 'face14.png', 'face15.png',];
var face = {
    x: (window.innerWidth / 2) - 152,
    y: 200,
    width: 303,
    height: 483,
    draw() {
        ctx.fillStyle = 'black';
        ctx.drawImage(imgFace, this.x, this.y);
    }
}

var groveL = {
    x: (window.innerWidth / 2) - 466,
    y: (window.innerHeight - 338),
    width: 237,
    height: 338,
    draw() {
        ctx.fillStyle = 'black';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(imgGL, this.x, this.y);
    }
}

var groveR = {
    x: (window.innerWidth / 2) + 233,
    y: (window.innerHeight - 338),
    width: 237,
    height: 338,
    draw() {
        ctx.fillStyle = 'black';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(imgGR, this.x, this.y);
    }
}
const end_sound = new Audio();
end_sound.src = "end.mp3";
const left_sound = [];
for (let i = 0; i < 10; i++) {
    const sound = new Audio();
    sound.src = "left.mp3";
    left_sound.push(sound);
}
const right_sound = [];
for (let i = 0; i < 10; i++) {
    const sound = new Audio();
    sound.src = "right.mp3";
    right_sound.push(sound);
}

var animation;
function framePlay() {
    animation = requestAnimationFrame(framePlay);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    groveL.draw();
    groveR.draw();
    face.draw();
    ctx.lineWidth = 3;
    ctx.fillStyle = "#000";
    ctx.font = "50px cursive";

    if (fist_count > 150) {
        end_sound.play();
        ctx.lineWidth = 3;
        ctx.fillStyle = "#000";
        ctx.font = "50px cursive";
        ctx.fillText(`score:GAME OVER`, window.innerWidth / 2 - 200, 100);
        // setTimeout(() => {
        //     var result = window.confirm('もう一度戦いますか。')
        //     if (result) {
        //         location.reload();
        //     } else {
        //         end_sound.pause();
        //     }
        // }, 6000);
        setTimeout(() => {
            end_sound.pause();
            cancelAnimationFrame(animation);
        }, 5000);
    }
}
framePlay();
var fist_count = 0;
document.addEventListener('keydown', function (e) {
    console.log(e.code);
    // if (dino.y < 200) {
    //     return;
    // }
    if (e.code === 'Space') {
        imgGL.src = 'groveL_1.png';
        groveL.y -= 90;
        for (let i = 0; i < left_sound.length; i++) {
            if (left_sound[i].paused) {
                left_sound[i].play();
                break;
            }
        }
        setTimeout(() => {
            imgGL.src = 'groveL.png';
            groveL.y += 90;
        }, 100);
        fist_count += 1;
        consition();
        console.log(fist_count);
    }
    if (e.code === 'Enter') {
        imgGR.src = 'groveR_1.png';
        groveR.y -= 90;
        for (let i = 0; i < right_sound.length; i++) {
            if (right_sound[i].paused) {
                right_sound[i].play();
                break;
            }
        }
        setTimeout(() => {
            imgGR.src = 'groveR.png';
            groveR.y += 90;
        }, 100);
        fist_count += 4;
        consition();
        console.log(fist_count);
    }
    function consition() {
        if (fist_count > 10 && fist_count < 20) {
            imgFace.src = `${imgFaceList[0]}`;
        } else if (fist_count > 20 && fist_count < 30) {
            imgFace.src = `${imgFaceList[1]}`;
        } else if (fist_count > 30 && fist_count < 40) {
            imgFace.src = `${imgFaceList[2]}`;
        } else if (fist_count > 40 && fist_count < 50) {
            imgFace.src = `${imgFaceList[3]}`;
        } else if (fist_count > 50 && fist_count < 60) {
            imgFace.src = `${imgFaceList[4]}`;
        } else if (fist_count > 60 && fist_count < 70) {
            imgFace.src = `${imgFaceList[5]}`;
        } else if (fist_count > 70 && fist_count < 80) {
            imgFace.src = `${imgFaceList[6]}`;
        } else if (fist_count > 80 && fist_count < 90) {
            imgFace.src = `${imgFaceList[7]}`;
        } else if (fist_count > 90 && fist_count < 100) {
            imgFace.src = `${imgFaceList[8]}`;
        } else if (fist_count > 100 && fist_count < 110) {
            imgFace.src = `${imgFaceList[9]}`;
        } else if (fist_count > 110 && fist_count < 120) {
            imgFace.src = `${imgFaceList[10]}`;
        } else if (fist_count > 120 && fist_count < 130) {
            imgFace.src = `${imgFaceList[11]}`;
        } else if (fist_count > 130 && fist_count < 140) {
            imgFace.src = `${imgFaceList[12]}`;
        } else if (fist_count > 140 && fist_count < 150) {
            imgFace.src = `${imgFaceList[13]}`;
        } else if (fist_count > 150 && fist_count < 160) {
            imgFace.src = `${imgFaceList[14]}`;
        }
    }
})