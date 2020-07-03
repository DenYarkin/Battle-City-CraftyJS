Crafty.c('Wall', {
    required: '2D, Canvas, Color, Collision',
    init() {
        this.color('grey');
        this.attr({ w: blockSize, h: blockSize });
    },
    at(x, y) {
        this.attr({
            x: blockSize * x,
            y: blockSize * y
        });
        return this;
    }
});

