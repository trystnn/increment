let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 6 6 6 a a 6 6 6 a a 6 6 6 6 
    . 6 6 6 6 a f 6 6 6 f a 6 6 6 6 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . 6 6 6 a 6 6 6 6 6 6 a 6 6 6 6 
    . 6 6 6 a 6 6 6 6 6 6 a 6 6 6 6 
    . . 6 6 6 a a a a a a a 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    `, SpriteKind.Player)
let increase = 4
for (let index = 0; index < 10; index++) {
    pause(200)
    mySprite.x += 1 + increase
    pause(200)
    mySprite.y += -2 - increase
    pause(200)
    mySprite.x += -3 - increase
    pause(200)
    mySprite.y += 4 + increase
    increase += 4
}
