var sea, ship;
var seaImg, dancingShip;

function preload() {
    //sea and ship
    seaImg = loadImage("sea.png");
    dancingShip = loadAnimation("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png");
}

function setup() {
    createCanvas(600, 600);
    background("blue");

    // background
    sea = createSprite(400, 200);
    sea.addImage(seaImg);
    sea.velocityX = -5;
    sea.scale = 0.3;


    ship = createSprite(130, 200, 30, 30);
    ship.addAnimation("movingShip", dancingShip);
    ship.scale = 0.25;

}

function draw() {
    background(0);
    sea.velocityX = -3;


    //code to reset the background
    if (sea.x < 0) {
        sea.x = sea.width / 8;
    }

    drawSprites();
}