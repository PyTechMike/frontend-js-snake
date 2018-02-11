var SnakePart = require('./snake-part.js');

class Snake {
	constructor(settings = {}) {
		this.parts = [];
		// this.head = this.parts[0];
		// this.length = settings.length || 0;


		this.direction = settings.direction || 'right';
	}
	get head() {
		return this.parts[0];
	}
	get length() {
		return settings.length || 0;
	}
	move(steps) {
		steps = steps || 1;
		this.parts.forEach(function (part, i) {
			if (i === 0) {
				this.head.direction = this.direction;
				this.head.move(steps);
			} else {
				part.direction = this.parts[i - 1].direction;
				part.move(steps);

			}

		});
	}
	eat() {
		if (this.parts.length === 0) {
			var needToAdd = this.parts.length;
			while (needToAdd !== 0) {
				var lastPart = this.parts[parts.length - 1];
				var newPart = new SnakePart({ direction: lastPart.direction });
				this.parts.push(newPart);
			}
		} else if (this.parts.length > 0) {
			var lastPart = this.parts[parts.length - 1];
			var newPart = new SnakePart({ direction: lastPart.direction });
			this.parts.push(newPart);
		}

	}
}

module.exports = Snake;
