let run: game.LedSprite = null
let char: game.LedSprite = null
basic.forever(function () {
    run = game.createSprite(randint(0, 4), randint(0, 4))
    char = game.createSprite(2, 2)
    while (true) {
        if (char.isTouching(run)) {
            char.change(LedSpriteProperty.X, randint(0, 4))
            run.change(LedSpriteProperty.Y, randint(0, 4))
        }
        if (input.acceleration(Dimension.Y) > 0) {
            char.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        if (input.acceleration(Dimension.Y) < 0) {
            char.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        if (input.acceleration(Dimension.X) < 0) {
            char.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
        if (input.acceleration(Dimension.X) > 0) {
            char.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
    }
})
