class Population {
    constructor(populationSize, lifeSpan, target) {
        this.rockets = [];
        this.populationSize = populationSize;
        this.matingPool = [];

        for (let i = 0; i < this.populationSize; i++) {
            this.rockets[i] = new Rocket(lifeSpan, target);
        }
    }

    evaluate() {
        let maxFit = 0;

        for (let i = 0; i < this.populationSize; i++) {
            this.rockets[i].calcFitness();
            if (this.rockets[i].fitness > maxFit) {
                maxFit = this.rockets[i].fitness;
            }
        }
        console.log(maxFit);

        for (let i = 0; i < this.populationSize; i++) {
            // Normalizing the fitness value to be in the range between 0 and 1
            this.rockets[i].fitness /= maxFit;
        }

        this.matingPool = [];
        // We want to increase the possibility of picking a rocket as parent to be related with how good its fitness
        // So if it has a fitness of 1 it will be in the mating pool 100 times
        // And if it has a fitness of 0.1 it will be in the mating pool only 10 times which will decrease its chances of being picked
        for (let i = 0; i < this.populationSize; i++) {
            let n = this.rockets[i].fitness * 100;

            for (let j = 0; j < n; j++) {
                this.matingPool.push(this.rockets[i]);
            }
        }
    }

    selection() {
        let newRockets = [];
        for (let i = 0; i < this.rockets.length; i++) {
            // Get two random parents from the mating pool and make a crossover

            let parentA = random(this.matingPool).dna;
            let parentB = random(this.matingPool).dna;
            let childDNA = parentA.crossover(parentB);
            childDNA.mutation();
            newRockets[i] = new Rocket(
                this.rockets[i].lifeSpan,
                this.rockets[i].target,
                childDNA
            );
        }
        this.rockets = newRockets;
    }

    run() {
        for (let i = 0; i < this.populationSize; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}
