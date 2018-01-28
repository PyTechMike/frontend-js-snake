var BaseElem = require('./base-element.js');
class Food extends BaseElem {
	constructor(settings = {}) {
		super();
		feed() {
			this.isVisible = false;
		}
	}
}
