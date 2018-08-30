class Block {
    constructor(x, y, w, h) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
    }

    show() {
        noStroke();
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
}
