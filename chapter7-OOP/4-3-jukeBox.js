class Vinyl {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class JukeBox {
  constructor(vinyls, cost = 0) {
    this.vinyls = {};
    this.queue = [];
    this.cost = cost;
    this.playing = false;
  }

  addVinyl(vinyl) {
    this.vinyls[vinyl.name] = vinyl.duration;
  }

  play(name) {
    const vinyl = this.vinyls[name];
    this.queue.push(vinyl);
    this.playing = true;
    this.queue.shift();

    setTimeout(() => {
      this.playing = false;
    }, vinyl.duration);
  }
}
