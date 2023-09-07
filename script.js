// Get canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasCusL = document.getElementById("customers");
const cusL = canvasCusL.getContext("2d");

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
wally.src = "images/characters/wally.webp";

let hasDrawn = false;

const buttons = document.getElementById("buttons");

// const menuButtons = docment.getElementById("buttons")

class Button {
  constructor(elementId, switchFunction) {
    this.element = document.getElementById(elementId);
    this.switchFunction = switchFunction;
    this.element.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      const buttons = document.querySelectorAll("#buttons button");
      buttons.forEach((button) => button.classList.remove("active"));
      // Add 'active' class to clicked button
      this.element.classList.add("active");
      // Call switch function
      this.switchFunction();
    });
  }
}

const orderButton = new Button("order", orderSwitch);
const brewButton = new Button("brew", brewSwitch);
const toppingsButton = new Button("toppings", toppingsSwitch);
const sealButton = new Button("seal", sealSwitch);

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

buttons.style.display = "none";

setTimeout(() => {
  buttons.style.display = "flex";
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

function move() {
  ctx.drawImage(wally, 0, 0, canvas.width, canvas.height);
  wally.classList.toggle("move");
}


const opt = {
  teabase: ["black tea", "green tea"],
  toppings: [
    "tapioca pearls",
    "strawberry popping pearls",
    "mango popping pearls",
    "strawberry pearls",
    "grape jelly",
  ],
  sugarlevel: ["20%", "50%", "75%", "100%"],
  icelevel: ["20%", "50%", "75%", "100%"],
  size: ["small", "large"],
  milk: ["milk", "no milk", "milk powder"],
};


class Customer {
  constructor(image, order) {
    this.image = image;
    this.order = order;
  }
}

function getRandomOrder() {
  let teabaseLength = opt.teabase.length;
  let toppingsLength = opt.toppings.length;
  let sugarlevelLength = opt.sugarlevel.length;
  let icelevelLength = opt.icelevel.length;
  let sizeLength = opt.size.length;
  let milkLength = opt.milk.length;

  let teabaseOption = Math.round(Math.random() * (teabaseLength - 1));
  let toppingsOption = Math.round(Math.random() * (toppingsLength - 1));
  let sugarlevelOption = Math.round(Math.random() * (sugarlevelLength - 1));
  let icelevelOption = Math.round(Math.random() * (icelevelLength - 1));
  let sizeOption = Math.round(Math.random() * (sizeLength - 1));
  let milkOption = Math.round(Math.random() * (milkLength - 1));

  let order = {
    teabase: opt.teabase[teabaseOption],
    toppings: opt.toppings[toppingsOption],
    sugarlevel: opt.sugarlevel[sugarlevelOption],
    icelevel: opt.icelevel[icelevelOption],
    size: opt.size[sizeOption],
    milk: opt.milk[milkOption],
  };

  return order;
}

let cusImages = ["images/characters/wally.webp"];

function generateCustomer() {
  let order = getRandomOrder();
  let cusNum = Math.floor(Math.random() * cusImages.length);
  let customer = new Customer(cusImages[cusNum], order);
  return customer;
}

let customer = generateCustomer();
console.log(customer);

let orderticket = document.getElementById("orderticket");

orderticket.style.scale = "0.75";
orderticket.style.transform = "translate(800px, -200px)";

orderticket.innerHTML = `
  <div style="display: flex; align-items: center;">
    <img src="${customer.image}" alt="customer" style="width: 100px; height: 100px; margin-right: 10px;">
    <div>
      <p style="font-size: 24px; margin-bottom: 5px;">Order:</p>
      <p style="font-size: 18px; margin-bottom: 5px;">Tea Base: ${customer.order.teabase}</p>
      <p style="font-size: 18px; margin-bottom: 5px;">Toppings: ${customer.order.toppings}</p>
      <p style="font-size: 18px; margin-bottom: 5px;">Sugar Level: ${customer.order.sugarlevel}</p>
      <p style="font-size: 18px; margin-bottom: 5px;">Ice Level: ${customer.order.icelevel}</p>
      <p style="font-size: 18px; margin-bottom: 5px;">Size: ${customer.order.size}</p>
      <p style="font-size: 18px; margin-bottom: 5px;">Milk: ${customer.order.milk}</p>
    </div>
  </div>
`;