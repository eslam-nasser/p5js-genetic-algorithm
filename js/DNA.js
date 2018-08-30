class DNA {
    constructor(lifeSpan) {
        this.genes = [];
        this.lifeSpan = lifeSpan;

        for (let i = 0; i < lifeSpan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.3);
        }
    }

    crossover(partner) {
        let newDNA = new DNA(this.lifeSpan);
        let midPoint = floor(random(this.genes.length));
        // We pick a point in the genes
        // We will create the first half of the child DNA from the genes BEFORE the midpoint
        // And the second half from the rest of parentB DNA
        for (let i = 0; i < this.genes.length; i++) {
            if (i > midPoint) {
                newDNA.genes[i] = this.genes[i];
            } else {
                newDNA.genes[i] = partner.genes[i];
            }
        }
        return newDNA;
    }

    mutation() {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < 0.01) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.3);
            }
        }
    }
}
