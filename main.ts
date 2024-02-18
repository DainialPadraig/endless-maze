scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
let mySprite = sprites.create(img`
    . . . . . . . . 6 . . . . . . . 
    . . . . . . 6 9 9 8 . . . . . . 
    . . . . . 6 1 1 9 9 8 . . . . . 
    . . . . 6 1 1 1 9 1 1 6 . . . . 
    . . . . 8 1 1 1 9 1 1 1 8 8 . . 
    6 6 6 8 9 1 1 8 8 1 1 9 1 1 6 6 
    6 9 1 1 9 9 6 8 8 8 6 9 1 1 1 6 
    6 1 1 1 1 8 8 . . 8 9 9 1 1 1 6 
    6 1 1 1 1 8 8 . . 6 1 1 9 9 8 . 
    . 6 1 1 9 9 6 8 6 6 1 1 6 8 8 . 
    . . 8 6 9 9 6 1 1 6 6 9 6 8 . . 
    . . 8 1 1 9 9 1 1 1 9 9 9 6 . . 
    . 6 9 1 1 1 9 1 1 9 1 1 1 9 6 . 
    . 6 9 1 1 1 9 6 6 9 1 1 1 1 6 . 
    . . 6 1 1 9 8 8 6 6 9 1 1 9 6 . 
    . . 6 6 6 6 . . . 6 6 6 6 6 6 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
