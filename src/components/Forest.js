Crafty.c('Forest', {
    required: '2D, Canvas, Color, Collision, forest',
    init: function() {
        // this.size = blockSize;
        this.color('green');
        this.attr({ w: blockSize, h: blockSize });
        this.z = 10
    },
    at: function(x, y) {
        this.attr({
            x: blockSize * x,
            y: blockSize * y
        });
        return this;
    },
});

