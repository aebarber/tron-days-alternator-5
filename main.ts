enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Portal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Space_Man.vy == 0) {
        Space_Man.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile6, function (sprite, location) {
    Meteoroid.setPosition(500, 0)
    Meteoroid.setVelocity(-50, 50)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    Meteoroid.setPosition(500, 0)
    Meteoroid.setVelocity(-50, 50)
})
function Alien_Planet () {
    scene.setBackgroundColor(0)
    tiles.setTilemap(tiles.createTilemap(hex`3200320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000000000000000020200000000020202000000000000000000000202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020200000000000000000000000000000002020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202000000000002020000000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020200000000020202020000020200000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000002020202000000000202000000000000000000000000000202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020200000000020200000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202000000000000000000000202000000000002020202020200000000000000020200000202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .........................................2........
        ......................................22...22.....
        ..............................................222.
        ...........22....222..........222.................
        ..................................................
        .222....................222.......................
        ..................................................
        ..................................................
        ..................................................
        ...........22.....................................
        ..................................................
        .222..............................................
        ..................................................
        ..................................................
        ..................................................
        ..................2222...............2222.........
        ..................................................
        ............................................22....
        ..................................................
        ..........................22......................
        ..................................................
        ..................................................
        .....2222.........................................
        ................................22.....22......22.
        ..................................................
        ....................................22............
        ..................................................
        ..................22..............................
        ..................................................
        .....................22.....................22....
        ..................................................
        ........................22....2222..22..22........
        ..................................................
        ..................................................
        ..................................................
        ...............................................22.
        ..................................................
        ..................................................
        ..................................................
        .......22..........2222....22.............2222....
        ..................................................
        ....22....22..................22..................
        ..................................................
        .22..........22.....222222.......22..222..........
        ..................................................
        ..................................................
        `, [myTiles.transparency16,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
    info.setLife(3)
    Space_Man = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    Space_Man.setPosition(20, 600)
    controller.moveSprite(Space_Man, 100, 0)
    Space_Man.ay = 150
    Meteoroid = sprites.create(img`
        ......................4.
        ...............22.......
        ...........4..224.222...
        .........42..222.2222.4.
        ........442.224.22242...
        .......442.244222242.2..
        ......442224422224422...
        .....444444422224422....
        ....444444524444522.4.22
        ...2cccbb52bb44522244.42
        ..2cccbb52bbbb544244....
        .ccccbbbbbcbbbb4444.2...
        cccccbbcbdbbcbbb45222..4
        cccccbbbbbbbbbbb522244..
        cccccbbbccbbbbb5422444..
        ccccccbdbbcbbbcb42444...
        cccbccbdbbcbbbbb4444....
        cccbccbbddbbbbb4244.....
        ccccbbbbbbbbbb4244......
        cccccbbbbbbcbb2b4.......
        cccccbbbbbdbcbbb........
        .cccccbbbbbcbbb.........
        ..cccccbbbbbbb..........
        ...cccccccccc...........
        `, SpriteKind.Enemy)
    Meteoroid.setPosition(500, 0)
    Meteoroid.setVelocity(-50, 50)
    scene.cameraFollowSprite(Space_Man)
    End = sprites.create(img`
        . . . . 9 8 8 8 9 9 8 . . . . . 
        . . . . 8 8 8 9 9 8 9 . . . . . 
        . . . . 9 8 9 8 8 8 8 . . . . . 
        . . . 9 8 8 9 f 8 8 9 9 . . . . 
        . . 8 9 8 8 f f f 9 8 8 9 . . . 
        . . 8 8 9 8 f f f 8 8 8 9 . . . 
        . . 9 8 9 8 f f f 8 8 9 . . . . 
        . . . 8 8 9 f f f 8 8 8 . . . . 
        . . . 9 8 8 f f f 9 8 9 . . . . 
        . . . . 8 8 8 f 8 9 8 . . . . . 
        . . . . 8 9 8 8 9 8 8 . . . . . 
        . . . . 8 8 9 9 8 8 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        `, SpriteKind.Portal)
    End.setPosition(25, 140)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Meteoroid.setPosition(500, 0)
    Meteoroid.setVelocity(-50, 50)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let End: Sprite = null
let Meteoroid: Sprite = null
let Space_Man: Sprite = null
effects.confetti.startScreenEffect(1000)
Alien_Planet()
game.onUpdate(function () {
    End.setImage(img`
        . . . . 8 9 9 9 8 8 9 . . . . . 
        . . . . 9 9 9 8 8 9 8 . . . . . 
        . . . . 8 9 8 9 9 9 9 . . . . . 
        . . . 8 9 9 8 f 9 9 8 8 . . . . 
        . . 9 8 9 9 f f f 8 9 9 8 . . . 
        . . 9 9 8 9 f f f 9 9 9 8 . . . 
        . . 8 9 8 9 f f f 9 9 8 . . . . 
        . . . 9 9 8 f f f 9 9 9 . . . . 
        . . . 8 9 9 f f f 8 9 8 . . . . 
        . . . . 9 9 9 f 9 8 9 . . . . . 
        . . . . 9 8 9 9 8 9 9 . . . . . 
        . . . . 9 9 8 8 9 9 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        `)
    End.setImage(img`
        . . . . 9 8 8 8 9 9 8 . . . . . 
        . . . . 8 8 8 9 9 8 9 . . . . . 
        . . . . 9 8 9 8 8 8 8 . . . . . 
        . . . 9 8 8 9 f 8 8 9 9 . . . . 
        . . 8 9 8 8 f f f 9 8 8 9 . . . 
        . . 8 8 9 8 f f f 8 8 8 9 . . . 
        . . 9 8 9 8 f f f 8 8 9 . . . . 
        . . . 8 8 9 f f f 8 8 8 . . . . 
        . . . 9 8 8 f f f 9 8 9 . . . . 
        . . . . 8 8 8 f 8 9 8 . . . . . 
        . . . . 8 9 8 8 9 8 8 . . . . . 
        . . . . 8 8 9 9 8 8 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        `)
})
forever(function () {
    effects.starField.startScreenEffect()
})
