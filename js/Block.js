class Block {
    constructor(x, y) {
        this.location = createVector(x, y);
        this.w = 20;
        this.h = 20;
    }

    show() {
        fill(48, 51, 107);
        noStroke();
        rect(this.location.x, this.location.y, this.w, this.h);
    }

    update() {
        //
    }
}
