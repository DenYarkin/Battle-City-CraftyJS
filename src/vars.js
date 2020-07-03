let blockSize = 62;
let gameSize = blockSize * 13;

let bulletRadius = 5;
let bulletSpeed = 250;

let playerTankSpeed = 150;
let enemyTankSpeed = 150;
let playerTankLifes = 2;
let playerTankHp = 1;
let enemyTankHp = 1;

let cooldownFrames = 45

let buttonWidth = 300, buttonHeight = 50

let maxEnemies = 5
let enemiesFrequency = 300

let levels = [
    [
        "+++++++++++++",
        "+P..........+",
        "+...........+",
        "+...........+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...fffff...+",
        "+...fffff...+",
        "+...fffff...+",
        "+++++++++++++",
    ],
    [
        "+++++++bbbbbb",
        "+P..........+",
        "+++.........+",
        "+...........+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...bbbbb...+",
        "+...fffff...+",
        "+...fffff...+",
        "+...fffff...+",
        "+++++++++++++",
    ],
    
]

// changable
let nowLevel = 0

let gameAssets = {
    'sprites': {
        './textures/base.png':{  
            tile: 443,
            tileh: 437,
            map: {
                base: [0, 0],  
            }
        },
        './textures/player-level2.png':{  
            tile: 80,
            tileh: 80,
            map: {
                player_tank: [0, 0],  
            }
        },
        './textures/bricks-full.png':{  
            tile: 64,
            tileh: 64,
            map: {
                brick: [0, 0],  
            }
        },
        './textures/forest.png':{  
            tile: 64,
            tileh: 64,
            map: {
                forest: [0, 0],  
            }
        },
    },
}
Crafty.load(gameAssets)