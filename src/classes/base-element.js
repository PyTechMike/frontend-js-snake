class BaseElem {
	constructor(settings = {}) {
		this.x = settings.x || 0;
		this.y = settings.y || 0;
		if (settings.isVisible === undefined) {
			this.isVisible = true;
		} else {
			this.isVisible = settings.isVisible;
		}
	}
}

module.exports = BaseElem;
