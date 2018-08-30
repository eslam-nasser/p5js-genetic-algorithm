let population;
let lifeSpan = 200;
let lifeP;
let currentGenerationNumber = 0;
let target;

function setup() {
    createCanvas(640, 480);
    population = new Population(25, lifeSpan);
    lifeP = createP();
    target = createVector(width / 2, 50);
}

function draw() {
    background(55);
    population.run();
    lifeP.html(currentGenerationNumber);
    currentGenerationNumber++;
    ellipse(target.x, target.y, 16);

    if (currentGenerationNumber === lifeSpan) {
        population = new Population(25, lifeSpan);
        currentGenerationNumber = 0;
    }
}
