import Phaser from "phaser";

import OneScene from "./scenes/OneScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [OneScene],
};

export default new Phaser.Game(config);
