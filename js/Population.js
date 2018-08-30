class Population {
    constructor(populationSize, lifeSpan) {
        this.rockets = [];
        this.populationSize = populationSize;

        for (let i = 0; i < this.populationSize; i++) {
            this.rockets[i] = new Rocket(lifeSpan);
        }
    }

    run() {
        for (let i = 0; i < this.populationSize; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}
