class GuessingGame {
    left;
    rigth;
    constructor() {
    }
    
    setRange(min, max) {
      this.left=min;
      this.rigth=max;
    }

    guess() {
      this.g=Math.round((this.rigth-this.left)/2)+this.left;
      return this.g;
    }
    
    lower() {
      this.setRange(this.left, this.g);
    }

    greater() {
      this.setRange(this.g, this.rigth);
    }
}

module.exports = GuessingGame;
