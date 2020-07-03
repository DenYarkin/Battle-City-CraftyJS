Crafty.defineScene('GameOver', function() {
    Crafty.init(gameSize, gameSize)
    Crafty.background('black');

    Crafty.e('2D, DOM, Text')
        .attr({
            h: 100,
            w: gameSize,
            x: 0,
            y: 50
        })
        .text('Game Over')
        .textFont({
            size: '70px'
        })
        .css({
            'text-align': 'center',
            'color': 'white'
        })
    let back = Crafty.e('Button')
        .bind('Click', function(MouseEvent){
            Crafty.scene('Menu');
        })
    back.newPos(gameSize / 2 - back.w / 2, 200)
    back.addText('Main menu')

    let again = Crafty.e('Button')
        .bind('Click', function(MouseEvent){
            Crafty.scene('Game');
        })
    again.newPos(gameSize / 2 - back.w / 2, 300)
    again.addText('Again')
})