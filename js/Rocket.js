class Rocket {
    constructor(lifeSpan, target, obstacle, childDNA) {
        this.pos = createVector(width / 2, height - 50);
        this.w = 5;
        this.h = 10;
        this.color = [255, 255, 255];
        this.vel = createVector();
        this.acc = createVector();
        if (childDNA) {
            this.dna = childDNA;
        } else {
            this.dna = new DNA(lifeSpan);
        }
        this.count = 0;
        this.target = target;
        this.obstacle = obstacle;
        this.fitness = 0;
        this.completed = false;
        this.crashed = false;
    }

    applyForce(f) {
        this.acc.add(f);
    }

    update() {
        let d = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);
        // If the rocket the close enough then its reached its goal
        if (d < 10) {
            this.completed = true;
            this.pos = this.target.copy();
            this.color = [46, 204, 113];
        }

        // Check if the rocket hit the obstacle
        if (
            this.pos.x > this.obstacle.pos.x &&
            this.pos.x < this.obstacle.pos.x + this.obstacle.w &&
            this.pos.y > this.obstacle.pos.y &&
            this.pos.y < this.obstacle.pos.y + this.obstacle.h
        ) {
            this.crashed = true;
            this.color = [231, 76, 60];
        }

        // Check if the rocket hit the world edges
        if (this.pos.x > width || this.pos.x < 0) {
            this.crashed = true;
            this.color = [231, 76, 60];
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.crashed = true;
            this.color = [231, 76, 60];
        }

        // Apply the moving forces of the rocket "thrusters"
        this.applyForce(this.dna.genes[this.count]);
        this.count++;

        // Only move if the rocket didn't reach it goal
        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4);
        }
    }

    show() {
        push();
        noStroke();
        fill(...this.color, 150);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        // the rocket body
        rect(0, 0, 10, 5);
        // this tip
        triangle(
            this.h / 2,
            -this.w / 2,

            this.h / 2,
            this.w / 2,

            this.h,
            0
        );
        pop();
    }

    calcFitness() {
        // Calculating the based on how much the rocket got close to the target
        let d = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);
        this.fitness = map(d, 0, width, width, 0);
        if (this.completed) {
            this.fitness *= 10;
        }
        if (this.crashed) {
            this.fitness /= 10;
        }
    }
}
