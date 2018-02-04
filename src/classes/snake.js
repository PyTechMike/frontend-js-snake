

class Snake {
	constructor(settings = {}) {
		this.parts = [];
		this.head = this.parts[0];
		this.length = settings.length || 0;
		this.direction = settings.direction || 'right';
	}
	move(steps) {
		if (this.direction == 'right' && steps) {

		} else if (this.direction == 'left' && steps) {

		} else if (this.direction == 'up' && steps) {

		} else if (this.direction == 'down' && steps) {

		}
	}
	eat() {
		this.length += 1;
	}
}

module.exports = Snake;
