Crafty.c('Brick', {
    required: '2D, Canvas, Color, Collision, brick',
    init: function() {
        // this.size = blockSize;
        this.color('red');
        this.attr({ w: blockSize, h: blockSize });
    },
    at: function(x, y) {
        this.attr({
            x: blockSize * x,
            y: blockSize * y
        });
        return this;
    },
    onBullet: function() {
        this.destroy();
    }
});

