Crafty.scene('Game', function() {
    Crafty.init(gameSize, gameSize)
    Crafty.background('black')
    Crafty.e('PlayerTank')
        .attr({
            x: 600,
            y: 600
        })
    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 13; j++) {
            if (levels[nowLevel][j][i] === 'b') {
                Crafty.e('Brick')
                    .at(i, j)
            }
            if (levels[nowLevel][j][i] === 'f') {
                Crafty.e('Forest')
                    .at(i, j)
            }
            if (levels[nowLevel][j][i] === '+') {
                Crafty.e('Wall')
                    .at(i, j)
            }
            if (levels[nowLevel][j][i] === 'P') {
                Crafty.e('PlayerBase')
                    .at(i, j)
            }
        }
    }


    let frequencyCounter = enemiesFrequency;
    this.bind('EnterFrame', function() {
        frequencyCounter--;
        if (frequencyCounter) {
            return;
        }
        frequencyCounter = enemiesFrequency;
        if (Crafty('EnemyTank').get().length === maxEnemies) {
            return;
        }
        for (let i = 0; i < 500; i++) {
            let x = Math.floor(Math.random() * 13);
            let y = Math.floor(Math.random() * 13);
            const enemy = Crafty.e('EnemyTank').at(x, y);
            if (enemy.hit('Wall') ||
                    enemy.hit('Brick') ||
                    enemy.hit('PlayerTank') ||
                    enemy.hit('Water') ||
                    enemy.hit('Forest') ||
                    enemy.hit('Bullet')) {
                enemy.destroy();
                continue;
            }
            break;
        }
    });
})