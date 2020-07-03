Crafty.defineScene('Menu', function() {
    Crafty.init(gameSize, gameSize)
    Crafty.background('black');

    Crafty.e('2D, DOM, Text')
        .attr({
            h: 100,
            w: gameSize,
            x: 0,
            y: 50
        })
        .text('Battle City')
        .textFont({
            size: '70px'
        })
        .css({
            'text-align': 'center',
            'color': 'white'
        })
    let start = Crafty.e('Button')
        .bind('Click', function(MouseEvent){
            Crafty.scene('Game');
        })
    start.newPos(gameSize / 2 - start.w / 2, 200)
    start.addText('Start')
})