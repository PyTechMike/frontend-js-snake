class BaseElem {
	constructor(settings = {}) {
		this.x = settings.x || 0;
		this.y = settings.y || 0;
		this.isVisible = settings.isVisible || true;
	}
}


module.exports = BaseElem;
