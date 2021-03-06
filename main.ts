namespace SpriteKind {
    export const land = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Madagascar.setVelocity(0, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pause_game == 1) {
        bar = 0
        pause_game = 0
        mySprite.setImage(assets.image`Tenrec0`)
        bar2 = randint(0, 10)
        if (Math.percentChance(25)) {
            info.player2.changeScoreBy(1)
        } else if (Math.percentChance(25)) {
            info.player3.changeScoreBy(1)
        } else if (Math.percentChance(25)) {
            info.player4.changeScoreBy(1)
        } else {
            info.player1.changeScoreBy(1)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Madagascar.setVelocity(100, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Madagascar.setVelocity(-100, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Madagascar.setVelocity(0, -100)
})
let bounds = 0
let bar2 = 0
let bar = 0
let Madagascar: Sprite = null
let mySprite: Sprite = null
let pause_game = 0
let score = 0
pause_game = 0
scene.setBackgroundColor(2)
scene.cameraFollowSprite(mySprite)
Madagascar = sprites.create(img`
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ........................................7777777777777777777.........................................
    ....................................777777777777777777777777777.....................................
    ..................................7777777777777777777777777777777...................................
    ...............................7777777777777777777777777777777777777................................
    .............................77777777777777777777777777777777777777777..............................
    ...........................777777777777777777777777777777777777777777777............................
    ..........................7777777777777777777bbb7777777777777777777777777...........................
    ........................777777777777777777777777b7777777777777b777777777777.........................
    .......................77777777777bbbb7777777777bb7777777b7777b7777777777777........................
    ......................7777777777777777bbbbbb777777b777777b77777b7777777777777.......................
    ....................777777777777777777777777bbb7777b777777bb777b777777777777777.....................
    ...................77777777777777777777777777777777b777777b7777b7777777777777777....................
    ..................777777777777777777777777777777777b777777b77777bb777777777777777...................
    .................7777777777777777777777777777777777b7777777b77777b7777b77777777777..................
    ................7777777777777777777777777777777777bb7777777b7777777777bb77777777777.................
    ................77777777777777777777bbbbbbbbbb7777b777777777b777777777bb77777777777.................
    ...............7777777777777bbbbbb777777777777777bb777777777bb77777777b7b77777777777................
    ..............777777b777777777777777777777777777bb77bb7777777bb77777777b7777777777777...............
    .............7777777bbbbbbbbb7777777777777777777b7777bb7777777bb7777777b77bb7777777777..............
    .............77777777777777777777777777777777777b777777bbb777777bb77777b777bb777777777..............
    ............7777777777777777777777777777777777777777777777b7777777bb7777b7777b777777777.............
    ...........77777777777777777777777777777777777777777777777bb777777777777b77777b777777777............
    ...........77777777777777777777bbbbbbb777b777777777777777777b77777777777bb77777b77777777............
    ..........77777777777777b7777777777777bbbb77777b7777777777777777777777777777777b777777777...........
    ..........77777777777777bb777777777777777b777777bb77777777777777777777777777777b777777777...........
    .........777777777b777777b777777777777777b77777777b77777777777777b7777777777777b7777777777..........
    .........777777777bb777777bb7777777777777b77777777b77777777777777b777777b777777b7777777777..........
    .........7777777777b7777777777bbb77777777b777777777bb777777b7777bb77777b77777777b777777777..........
    ........77777777777bb777777777777bb777777b7777777777b777777b7777b77777b777777777b7777777777.........
    ........777777777777b77777777777777bb777bb777b7777777b7777b7777bb7777b7777777777b7777777777.........
    .......7777777777777b777777b77777777777bb7777b777777777777b7777b77777b7777777b77b77777777777........
    .......77777777777777b777777b7777777777b777777b7777777777b77777b7777b777b7777bbbb77777777777........
    .......77777b77777777b7777777bb7777777b7777777bb777777777b7777b7777b777b77777777777777777777........
    .......777777bb7777777b7777777bb77777b777777777bb77777777b7777b7777b777b77777777777777777777........
    ......777777777b777777bb7777777777777b777777777bb7777777b7777bb777b777b7777777777bb7777777777.......
    ......7777777777bb77777bb7777777777bb77777777bb777777777b7777b777bb777b7777b777bbbb7777777777.......
    ......77777777777bb77777b77777777bbb7777777777b77777777b7777b7777b777b77777b7bbb777b777777777.......
    ......7777777777777bb77777777777b7777777777777bb777777b77777b7777b777b77777b7b77777bb77777777.......
    ......777777777777bb7777777777bb777777777777777b777777b77777b777b7777b77777bb7777777b77777777.......
    ......7777777777bb77777777777b777777777b77777777777777b7777b7777b777b77777bb77777777b77777777.......
    ......77777777bb77777777777bb77777777777b777777777777b7777bb7777b77b777777bb77777777b77777777.......
    ......777777777bbbb77777777bb7777b777777b77777777bb77b7777bb777b777b777777b7777777777b7777777.......
    ......7777777777777b77777777777777b777777b777777bb777b777777777b777b77777bb7777777777b7777777.......
    ......7777777777777777777777777777bb77777b777777b777b7777777777b77b777777b7777777777777777777.......
    ......77777777777777777777777777777b777777b7777b7777b777777777b777b77777bb7777777777777777777.......
    ......77777777777777bb7777777777777b777777b777bb7777b777777777b777b77777bb7777777777777777777.......
    ......777777777777bb777777777b777777b7777777777777777777777777b77b777777b777777bbbb7777777777.......
    ......77777777bbbb77777777777b777777bb777777777777777777777777b77b777777b777777b77b7777777777.......
    ......77777777b7777777777b777b7777777b777777777777777777777777b77b77777777777777777b777777777.......
    ......777777777777777777b7777b7777777777777777777777777777777b777b77777777777777777b777777777.......
    ......777777777777777777b7777b77777777bb77777777777bbbbbbbb77b777b77777777777777777b777777777.......
    ......77777777777777777bb7777b777777bb77777777bbbbb7777777777b77b777777777777777777b777777777.......
    ......77777777777777777b77777b7777bb7777777777777777777777777b77b777777777777777777b777777777.......
    .......777777777777777bb77777b7777b77777777b77777777777777777b77b7777777777777777777b7777777........
    .......777777777777777b7777777777b7777777777b7777777777777777b77b7777777777777777777b7777777........
    .......777777777777777b777777777b77b777777777bb77777777777777b77777777777bb777777777b7777777........
    .......7777777777777777777777777b77b77777777777b7777777777777b777777777777b777777777b7777777........
    ........77777777777777777777777b777b777777777777b777777777777b77777777777b7777777777b777777.........
    ........77777777777b77777777777b777b777777b777777bbb7777b7777b7777bb77777b7777777777b777777.........
    .........7777777777b7777777777b7777b77777b7777777777777b7777bb77bbb777777b7777777777b77777..........
    .........7777777777bb77777777b77777b7777b7777777777777b77777bbbb77777777b7777777777b777777..........
    .........77777777777b77777777b7777b77777b777777777777b777777777777777777b7777777777b777777..........
    ..........7777777777b77777777b7777b7777b77777777777bb777777777777777777b77777777777b77777...........
    ..........77777777777b777777b77777b7777b777777777bb7777777777777777777b77777777777bb77777...........
    ...........7777777777b777777777777b777b77777777bb777777777777777777777b7777777777bb77777............
    ...........7777777777b7777777777bb777b77777777b7777777777777777777777b777777777bbb777777............
    ............7777777777b77777777b7777b7777777bb7777777777777777777777b777777777bb7777777.............
    .............777777777bb77777bb7777bb777777777777777777777777777777b7777777bbb77777777..............
    .............7777777777b77777b7777bb77777bb77777777777777777777777b77777777b7777777777..............
    ..............777777777bb777777777b7777777bbb77777777bb777777777bb7777777777777777777...............
    ...............7777777777777777777b7777777777bb77777b7777777777b77777777777777777777................
    ................777777777777777777b777777777777bbbbb77777777777777777777777b7777777.................
    ................77777777777777777b777bb777777777777777777777777777777777777b7777777.................
    .................7777777777777777b77777bb7777777777777b7777777777777777777b7777777..................
    ..................77777777777777777777777b777777777777b7777777777777777777b777777...................
    ...................77777777777777777777777b7777777777b77777b77777777777777b77777....................
    ....................77777777777777777777777bb7777777b7777777bb77777777777b77777.....................
    ......................7777777777777777777777bb777777b777777777b7777777777b777.......................
    .......................7777777777777777777777777777bb777777777bb7777777bb777........................
    ........................777777777777777777777777777b777777777777bb7777bb777.........................
    ..........................7777777777777777777777777bbbbbbbbb77777bbbbb777...........................
    ...........................777777777777777777777777777777777777777777777............................
    .............................77777777777777777777777777777777777777777..............................
    ...............................7777777777777777777777777777777777777................................
    ..................................7777777777777777777777777777777...................................
    ....................................777777777777777777777777777.....................................
    ........................................7777777777777777777.........................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    `, SpriteKind.land)
scaling.scaleByPixels(Madagascar, 500, ScaleDirection.Uniformly, ScaleAnchor.Middle, false)
mySprite = sprites.create(assets.image`Tenrec0`, SpriteKind.Player)
scaling.scaleByPixels(mySprite, 20, ScaleDirection.Horizontally, ScaleAnchor.Middle)
scaling.scaleByPixels(mySprite, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
info.player1.setScore(0)
info.player2.setScore(0)
info.player3.setScore(0)
info.player4.setScore(0)
game.onUpdate(function () {
    if (pause_game == 1) {
        bar = 0
        bar += 1
        if (bar == 10) {
            bar = 0
        }
    }
})
game.onUpdateInterval(7000, function () {
    game.showLongText("Fight! (A)", DialogLayout.Top)
    mySprite.setImage(assets.image`Tenrec`)
    pause_game = 1
})
forever(function () {
    if (pause_game == 0) {
        if (mySprite.overlapsWith(Madagascar)) {
            bounds = 0
        } else {
            bounds = 1
            if (bounds == 1) {
                game.over(false)
            }
        }
    }
})
