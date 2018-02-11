var SnakePart = require('./snake-part.js');

class Snake {
	constructor(settings = {}) {
		this.parts = [];
		this.head = this.parts[0];
		this.length = settings.length || 0;
		this.direction = settings.direction || 'right';
	}
	move(steps) {
		steps = steps || 1;
		this.parts.forEach(function (name, i) {
			if (i === 0) {
				this.head.direction = this.direction;
				this.head.move(steps);
			} else {
				this.parts[i].direction = this.parts[i - 1].direction;
				this.parts[i].move(steps);

			}

		});
	}
	eat() {
		var newPart = new SnakePart({ direction: this.parts[parts.length - 2].direction });
		this.parts.push(newPart);
		//this.parts[parts.length - 1].direction = this.parts[parts.length - 2].direction;

	}
}

module.exports = Snake;