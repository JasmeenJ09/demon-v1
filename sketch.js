var coinsImg
var demonImg
var hauntedHouse
var soliderImg

var coins, solider, demon

function preload() {
  coinsImg = loadImage("coins.png")
  demonImg = loadImage("demon.png")
  hauntedHouse = loadImage("HauntedHouse.jpg")
  soliderImg = loadImage("soldierShooter.png")
}

function setup() {
  createCanvas(800, 400);
  
  solider = createSprite(100, 350)
  solider.addImage(soliderImg)
  solider.scale=0.3
}

function draw() {
  background(hauntedHouse);
  spawnDemon()
  drawSprites();
}

function spawnDemon() {
  if (frameCount % 100 === 0) {
    demon = createSprite(800, 330)
    demon.addImage(demonImg)
    demon.scale = 1
    demon.velocityX = -5
  }
}
