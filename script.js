// Get canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasCusL = document.getElementById("customers")
const cusL = canvasCusL.getContext("2d")

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
toppingsScene.src = "images/scenes/toppingsstation.png";

const sealScene = new Image();
sealScene.src = "images/scenes/sealstation.png";

const wally = new Image();
wally.src = "images/characters/wally.webp"



let hasDrawn = false;

// const menuButtons = docment.getElementById("buttons")

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

const buttons = document.getElementById('buttons');
buttons.style.display = 'none';

setTimeout(() => {
  buttons.style.display = 'flex';
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
    drawOrderScene();
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


function move () {
  ctx.drawImage(wally, 0, 0, canvas.width, canvas.height);
  wally.classList.toggle("move")
}

let cusImages = ["images/characters/wally.webp"]
let cusOrder = [] // master array one of each 
let cusNum = undefined

const opt = {
  teabase: ["black tea", "green tea"],
  toppings: ["tapioca pearls", "strawberry popping pearls", "mango popping pearls", "strawberry pearls", "grape jelly"],
  sugarlevel: ["20%", "50%", "75%", "100%"],
  icelevel: ["20%", "50%", "75%", "100%"],
  size: ["small", "large"],
  milk: ["milk", "no milk", "milk powder"]
}

function getRandomOptions() {
  // math.random * array.length
  let teabaseLength = opt.teabase.length
  let toppingsLength = opt.toppings.length
  let sugarlevelLength = opt.sugarlevel.length
  let icelevelLength = opt.icelevel.length
  let sizeLength = opt.sizelength.length
  let milkLength = opt.milk.length

  let teabaseOption = round(Math.random() * teabaseLength)
  // let teabaseOption = round(Math.random() * teabaseLength)
  // let teabaseOption = round(Math.random() * teabaseLength)
  // let teabaseOption = round(Math.random() * teabaseLength)
  // let teabaseOption = round(Math.random() * teabaseLength)
  // let teabaseOption = round(Math.random() * teabaseLength)
  
}



class customers {
  constructor(image, order){
    this.image = cusImages[cusNum]
    this.order = cusOrder[undefined]
  }
}