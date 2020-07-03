Crafty.c('PlayerBase', {
    required: '2D, Canvas, Color, Collision, base',
    init: function() {
        // this.size = blockSize;
        this.color('rgb(200, 200, 200)');
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
        Crafty.scene('GameOver');
    }
});

