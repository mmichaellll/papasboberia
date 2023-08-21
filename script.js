// Get canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Load images
const exterior = new Image();
exterior.src = "images/start/exterior.png";

const dayone = new Image();
dayone.src = "images/start/dayone.png";

const orderScene = new Image();
orderScene.src = "images/scenes/orderstation.png";

const brewScene = new Image();
brewScene.src = "images/scenes/brewstation.png";

const toppingsScene = new Image();
toppingsScene.src = "images/scenes/toppingstation.png";

const sealScene = new Image();
sealScene.src = "images/scenes/sealstation.png";

let hasDrawn = false;

class Button {
  constructor(elementId, switchFunction) {
      this.element = document.getElementById(elementId);
      this.switchFunction = switchFunction;
      this.element.addEventListener('click', () => {
          // Remove 'active' class from all buttons
          const buttons = document.querySelectorAll('#buttons button');
          buttons.forEach(button => button.classList.remove('active'));
          // Add 'active' class to clicked button
          this.element.classList.add('active');
          // Call switch function
          this.switchFunction();
      });
  }
}

const orderButton = new Button('order', orderSwitch);
const brewButton = new Button('brew', brewSwitch);
const toppingsButton = new Button('toppings', toppingsSwitch);
const sealButton = new Button('seal', sealSwitch);



function drawOrderScene() {
  ctx.drawImage(orderScene, 0, 0, canvas.width, canvas.height);
}

function drawBrewScene() {
  ctx.drawImage(brewScene, 0, 0, canvas.width, canvas.height);
}

function drawToppingsScene() {
  ctx.drawImage(toppingsScene, 0, 0, canvas.width, canvas.height);
}

function drawSealScene() {
  ctx.drawImage(sealScene, 0, 0, canvas.width, canvas.height);
}

function orderSwitch() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawOrderScene();
}

function brewSwitch() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBrewScene();
}

function toppingsSwitch() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawToppingsScene();
}

function sealSwitch() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSealScene();
}

// Add this code to show buttons after 5 seconds
const buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => button.style.display = 'none');

setTimeout(() => {
  buttons.forEach(button => button.style.display = 'block');
}, 5000);

// Draw on load
window.addEventListener("load", () => {
  // Set dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Draw images
  drawExterior();
  drawDayOne();

  // Set flag
  hasDrawn = true;

  // Remove after timeout
  setTimeout(() => {
    hasDrawn = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
});

// Redraw on resize
window.addEventListener("resize", () => {
  // Resize canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (hasDrawn) {
    drawExterior();
    drawDayOne();
  }
});

function drawExterior() {
  ctx.drawImage(exterior, 0, 0, canvas.width, canvas.height);
}

function drawDayOne() {
  const x = canvas.width / 2 - dayone.width / 2;
  const y = canvas.height - dayone.height;
  ctx.drawImage(dayone, x, y);
}