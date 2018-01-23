//Taken from https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse

var canvas, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 2;

function init() {
    canvas = document.getElementById('can');
    canDraw = canvas.getContext("2d");

    canvas.addEventListener("mousemove", function (e) {
        findXY('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findXY('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findXY('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findXY('out', e)
    }, false);
}


function draw() {
    canDraw.beginPath();
    canDraw.moveTo(prevX, prevY);
    canDraw.lineTo(currX, currY);
    canDraw.strokeStyle = x;
    canDraw.lineWidth = y;
    canDraw.stroke();
    canDraw.closePath();
}


function clear() {
    var m = confirm("Want to clear");
    if (m) {
        canDraw.clearRect(0, 0, canvas.width, canvas.height);
        init();
    }
}


function findXY(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            canDraw.beginPath();
            canDraw.fillStyle = x;
            canDraw.fillRect(currX, currY, 2, 2);
            canDraw.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}
