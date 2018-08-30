class DNA {
    constructor(lifeSpan) {
        this.genes = [];
        for (let i = 0; i < lifeSpan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.1);
        }
    }
}
