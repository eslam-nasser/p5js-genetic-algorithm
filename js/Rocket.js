class Rocket {
    constructor(lifeSpan) {
        this.pos = createVector(width / 2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.dna = new DNA(lifeSpan);
        this.count = 0;
    }

    applyForce(f) {
        this.acc.add(f);
    }

    update() {
        this.applyForce(this.dna.genes[this.count]);
        this.count++;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    show() {
        push();
        noStroke();
        fill(255, 150);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    }
}
