var BaseElem = require('./base-element.js');

class SnakePart extends BaseElem {
	constructor(settings = {}) {
		super(settings);

		this.direction = settings.direction || 'right';

	}
	move(steps) {
		if (this.direction == 'right' && steps) {
			this.x += steps;
		} else if (this.direction == 'left' && steps) {
			this.x -= steps;
		} else if (this.direction == 'up' && steps) {
			this.y -= steps;
		} else if (this.direction == 'down' && steps) {
			this.y += steps;
		}
	}
}

module.exports = SnakePart;
