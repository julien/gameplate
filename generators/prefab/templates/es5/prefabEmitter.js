<% var up_prefab = prefabName.charAt(0).toUpperCase() + prefabName.slice(1); %>
'use strict';

//Documentation for Phaser's (2.6.2) emitter:: phaser.io/docs/2.6.2/Phaser.Particles.Arcade.Emitter.html
<%= up_prefab %>.prototype = Object.create(Phaser.Particles.Arcade.Emitter.prototype);

  // prefab initialization and construction
<%= up_prefab %>.prototype.constructor = function(game, x, y, maxParticles) {
  Phaser.Particles.Arcade.Emitter.call(this, game, x, y, maxParticles);

};

  // prefab specific frame update code
<%= up_prefab %>.prototype.update = function() {

};

module.exports = <%= up_prefab %>;
