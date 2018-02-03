var BaseElem = require('./base-element.js');

class Food extends BaseElem {
	constructor(settings = {}) {
		super(settings);
	}
	feed() {
		this.isVisible = false;
	}
}

module.exports = Food;
