Crafty.c('Forest', {
    required: '2D, Canvas, Color, Collision',
    init: function() {
        this.color('blue')
    },
    at(x, y) {
        this.attr({
            x: blockSize * x,
            y: blockSize * y
        });
        return this;
    },
})