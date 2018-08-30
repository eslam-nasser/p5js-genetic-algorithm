let population;
let lifeSpan = 450;
let lifeP;
let currentGenerationNumber = 0;
let pastGnerationsCounter = 1;
let target;
let obstacle;

function setup() {
    createCanvas(640, 480);
    // Init target and the obstacle
    target = createVector(width / 2, 50);
    obstacle = new Block(width / 2 - 75, height / 2, 150, 10);

    population = new Population(25, lifeSpan, target, obstacle);
    lifeP = createP();
}

function draw() {
    background(55);
    population.run();
    lifeP.html(`Generation #${pastGnerationsCounter}`);
    currentGenerationNumber++;
    ellipse(target.x, target.y, 16);

    // Obstacle
    obstacle.show();

    if (currentGenerationNumber === lifeSpan) {
        population.evaluate();
        population.selection();
        currentGenerationNumber = 0;
        pastGnerationsCounter++;
    }
}
