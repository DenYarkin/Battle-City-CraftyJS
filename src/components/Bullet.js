Crafty.c('Bullet', {
    required: '2D, Canvas, Collision, Color, Motion',
    init: function() {
        this.color('white')
        this.h = bulletRadius
        this.w = bulletRadius
    },
    events: {
        'EnterFrame': function() {
            if (this.hit('Brick')) {
                this.destroy()
                this.hit('Brick')[0].obj.onBullet()
            }
            if (this.hit('Wall')) {
                this.destroy()
            }
            if (this.hit('PlayerTank')) {
                this.destroy()
                this.hit('PlayerTank')[0].obj.onBullet()
            }
            if (this.hit('EnemyTank')) {
                this.destroy()
                this.hit('EnemyTank')[0].obj.onBullet()
            }
            if (this.hit('PlayerBase')) {
                this.destroy()
                this.hit('PlayerBase')[0].obj.onBullet()
            }
        }
    },
    set: function(x, y, direction) {
        if (direction == 90) {
            this.x = x + blockSize / 2
            this.y = y - bulletRadius * 2
            this.vx = 0
            this.vy = -bulletSpeed
        }
        if (direction == 270) {
            this.x = x + blockSize / 2
            this.y = y + blockSize + bulletRadius * 2
            this.vx = 0
            this.vy = bulletSpeed
        }
        if (direction == 180) {
            this.x = x - bulletRadius * 2
            this.y = y + blockSize / 2
            this.vx = -bulletSpeed
            this.vy = 0
        }
        if (direction == 0) {
            this.x = x + blockSize + bulletRadius * 2
            this.y = y + blockSize / 2
            this.vx = bulletSpeed
            this.vy = 0
        }
        return this
    }
})