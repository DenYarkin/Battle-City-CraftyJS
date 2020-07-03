Crafty.c('PlayerTank', {
    required: '2D, Canvas, Collision, Color, Keyboard, Fourway,  player_tank',
    init: function() {
        this.cooldown = cooldownFrames
        this.direct = 90

        this.color('orange')
        this.h = blockSize
        this.w = blockSize
        // this.fourway(playerTankSpeed, {normalize:true});
    },
    events: {
        'EnterFrame': function() {
            this.cooldown--;
            if (this.x <= 0) {
                this.x = 0
            }
            if (this.x >= gameSize - blockSize) {
                this.x = gameSize - blockSize
            }
            if (this.y <= 0) {
                this.y = 0
            }
            if (this.y >= gameSize - blockSize) {
                this.y = gameSize - blockSize
            }
            if (this.hit('Brick')) {
                let coll = this.hit('Brick')[0]
                console.log(coll.overlap * coll.normal.x)
                this.x -= coll.overlap * coll.normal.x 
                this.y -= coll.overlap * coll.normal.y
            }
            if (this.hit('Wall')) {
                let coll = this.hit('Wall')[0]
                this.x -= coll.overlap * coll.normal.x
                this.y -= coll.overlap * coll.normal.y
            }
        },
        'KeyDown': function(e) {
            if (e.key == Crafty.keys.SPACE && this.cooldown <= 0) {
                this.cooldown = cooldownFrames
                Crafty.e('Bullet')
                    .set(this.x, this.y, this.direct)
            }
            if (e.key == Crafty.keys.W) {
                this.vx = 0
                this.vy = -playerTankSpeed
                this.direct = 90
            } else if (e.key == Crafty.keys.S) {
                this.vx = 0
                this.vy = playerTankSpeed
                this.direct = 270
            } else if (e.key == Crafty.keys.A) {
                this.vx = -playerTankSpeed
                this.vy = 0
                this.direct = 180
            } else if (e.key == Crafty.keys.D) {
                this.vx = playerTankSpeed
                this.vy = 0
                this.direct = 0
            }
        },
        'KeyUp': function(e) {
            if (e.key == Crafty.keys.W) {
                this.vy = 0
                this.direct = 90
            } else if (e.key == Crafty.keys.S) {
                this.vy = 0
                this.direct = 270
            } else if (e.key == Crafty.keys.A) {
                this.vx = 0
                this.direct = 180
            } else if (e.key == Crafty.keys.D) {
                this.vx = 0
                this.direct = 0
            }
        }
    }
})