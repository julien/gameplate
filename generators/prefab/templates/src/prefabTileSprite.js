<% var up_prefab = prefabName.charAt(0).toUpperCase() + prefabName.slice(1); %>
//Documentation for Phaser's (2.6.2) tile sprites:: phaser.io/docs/2.6.2/Phaser.TileSprite.html
class <%= up_prefab %> extends Phaser.TileSprite {

  //initialization code in the constructor
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height, '<%= prefabName %>');
  }

  //Code ran on each frame of game
  update() {

  }

}

export default <%= up_prefab %>;
