let population;
let lifeSpan = 350;
let lifeP;
let currentGenerationNumber = 0;
let pastGnerationsCounter = 1;
let target;

function setup() {
    createCanvas(640, 480);
    target = createVector(width / 2, 50);
    population = new Population(25, lifeSpan, target);
    lifeP = createP();
}

function draw() {
    background(55);
    population.run();
    lifeP.html(`Generation #${pastGnerationsCounter}`);
    currentGenerationNumber++;
    ellipse(target.x, target.y, 16);

    if (currentGenerationNumber === lifeSpan) {
        population.evaluate();
        population.selection();
        currentGenerationNumber = 0;
        pastGnerationsCounter++;
    }
}
