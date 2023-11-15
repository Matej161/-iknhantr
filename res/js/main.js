const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const logo = new Image();
logo.src = "./res/img/moucha.png";

/*ctx.fillStyle = "red";
ctx.fillRect(50, 200, 80, 200);

ctx.strokeStyle = "blue";
ctx.strokeRect(5, 5, 100, 100);

ctx.beginPath();
ctx.arc(400, 250, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 270, 50, 0, 1 * Math.PI);
ctx.stroke();

ctx.moveTo(200, 0);
ctx.arc(10, 10);
ctx.lineTo(200, 50);
ctx.stroke();*/

//! barak
/*
ctx.fillStyle = "green";
ctx.fillRect (200, 300, 350, 250);

ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(375, 200);
ctx.lineTo(180, 300);
ctx.lineTo(570, 300);
ctx.fill();


ctx.fillStyle = "brown";
ctx.fillRect (275, 460, 60, 90);

ctx.fillStyle = "black";
ctx.fillRect (320, 500, 10, 5);

ctx.fillStyle = "blue";
ctx.fillRect (420, 350, 70, 70);

ctx.fillStyle = "salmon";
ctx.fillRect (250, 225, 20, 50);

const barak = (x, y) => {
    
}
/*ctx.fillStyle = "darkgreen";
ctx.fillRect (550, 300, 100, 250);*/

let x = 10;
let y = 10;
let xVelocity = 2;
let yVelocity = 2;
let width = 200;
let height = 200;

window.addEventListener("resize", () => {
  changeCanvasSize();
});

window.onload = () => {
  changeCanvasSize();
  setInterval(() => {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (y + 200 >= canvas.height || y <= 0) {
      yVelocity *= -1;
    }
    if (x + 200 >= canvas.width || x <= 0) {
      xVelocity *= -1;
    }
    x += xVelocity;
    y += yVelocity;
    ctx.filter = `hue-rotate(${getRandomNumber(0, 360)}deg)`;
    ctx.drawImage(logo, x, y, width, height);
  }, 0.1);
};

const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

function changeCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
