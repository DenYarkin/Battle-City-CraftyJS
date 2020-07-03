Crafty.c('EnemyTank', {
    required: '2D, Canvas, Color, Motion, Collision',
    init() {
        this.color('pink');
        this.attr({ w: blockSize, h: blockSize });
        this.hp = enemyTankHp;
        this.dir = 0;

        let rnd = Math.random();
        if (rnd < 0.25) {
            this.dir = 0;
        } else if (rnd < 0.5) {
            this.dir = 90;
        } else if (rnd < 0.75) {
            this.dir = 180;
        } else {
            this.dir = 270;
        }
    },
    at(x, y) {
        this.attr({ x: x * blockSize, y: y * blockSize });
        return this;
    },
    onBullet() {
        this.hp--;
        if (this.hp <= 0) {
            this.destroy();
        }
        return this;
    },
    events: {
        'EnterFrame': function() {
            // console.log(this.vx, this.vy);
            const colls = [];
            const hitBrick = this.hit('Brick');
            const hitWall = this.hit('Wall');
            const hitPlayerTank = this.hit('PlayerTank');
            if (hitBrick) {
                for (coll of hitBrick) {
                    colls.push(coll);
                }
            }
            if (hitWall) {
                for (coll of hitWall) {
                    colls.push(coll);
                }
            }
            if (hitPlayerTank) {
                for (coll of hitPlayerTank) {
                    colls.push(coll);
                }
            }

            for (coll of colls) {
                this.x -= coll.overlap * coll.normal.x;
                this.y -= coll.overlap * coll.normal.y;
                changeDir(this);
            }

            if (this.x < 0) {
                changeDir(this);
                this.x = 0;
            }
            if (this.y < 0) {
                changeDir(this);
                this.y = 0;
            }
            if (this.x > gameSize - blockSize) {
                changeDir(this);
                this.x = gameSize - blockSize;
            }
            if (this.y > gameSize - blockSize) {
                changeDir(this);
                this.y = gameSize - blockSize;
            }

            if (this.dir === 0) {
                this.vx = enemyTankSpeed;
                this.vy = 0;
            }
            if (this.dir === 90) {
                this.vx = 0;
                this.vy = -enemyTankSpeed;
            }
            if (this.dir === 180) {
                this.vx = -enemyTankSpeed;
                this.vy = 0;
            }
            if (this.dir === 270) {
                this.vx = 0;
                this.vy = enemyTankSpeed;
            }
        }
    }
});

function changeDir(obj) {
    if (Math.round(Math.random())) {
        obj.dir += 90;
    } else {
        obj.dir -= 90;
    }
    obj.dir = (obj.dir + 360) % 360;
}