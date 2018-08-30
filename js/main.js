let population;
let lifeSpan = 450;
let lifeP;
let currentGenerationNumber = 0;
let pastGnerationsCounter = 1;
let target;
let obstacle;
let x = 20;
let y = 20;

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
    lifeP.html(`Generation #${pastGnerationsCounter}`);
    currentGenerationNumber++;

    // Obstacle
    obstacle.show();

    // Show the target
    ellipse(target.x, target.y, 16);

    // Kickstart the population
    population.run();

    // If we reached the end of a generation life span
    if (currentGenerationNumber === lifeSpan) {
        // Evaluate stuff and generate new generation
        population.evaluate();
        population.selection();
        currentGenerationNumber = 0;
        pastGnerationsCounter++;
    }
}
