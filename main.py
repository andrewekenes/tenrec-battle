@namespace
class SpriteKind:
    land = SpriteKind.create()

def on_up_pressed():
    Madagascar.set_velocity(0, 100)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global bar, pause_game, bar2
    if pause_game == 1:
        bar = 0
        pause_game = 0
        bar2 = randint(0, 10)
        if bar > bar2:
            mySprite.set_image(assets.image("""
                Tenrec0
            """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    Madagascar.set_velocity(100, 0)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    Madagascar.set_velocity(-100, 0)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    Madagascar.set_velocity(0, -100)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

bounds = 0
bar2 = 0
bar = 0
Madagascar: Sprite = None
mySprite: Sprite = None
pause_game = 0
pause_game = 0
score = 0
scene.set_background_color(2)
scene.camera_follow_sprite(mySprite)
Madagascar = sprites.create(img("""
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
    """),
    SpriteKind.land)
scaling.scale_by_pixels(Madagascar,
    500,
    ScaleDirection.UNIFORMLY,
    ScaleAnchor.MIDDLE,
    False)
mySprite = sprites.create(assets.image("""
    Tenrec0
"""), SpriteKind.player)
scaling.scale_by_pixels(mySprite,
    20,
    ScaleDirection.HORIZONTALLY,
    ScaleAnchor.MIDDLE)
scaling.scale_by_pixels(mySprite, 10, ScaleDirection.VERTICALLY, ScaleAnchor.MIDDLE)
info.player1.set_score(0)
info.player2.set_score(0)
info.player3.set_score(0)
info.player4.set_score(0)

def on_on_update():
    global bar
    if pause_game == 1:
        bar = 0
        bar += 1
        if bar == 10:
            bar = 0
game.on_update(on_on_update)

def on_update_interval():
    global pause_game
    mySprite.set_image(assets.image("""
        Tenrec
    """))
    pause_game = 1
game.on_update_interval(2000, on_update_interval)

def on_forever():
    global bounds
    if pause_game == 0:
        if mySprite.overlaps_with(Madagascar):
            bounds = 0
        else:
            bounds = 1
            if bounds == 1:
                game.over(False)
forever(on_forever)