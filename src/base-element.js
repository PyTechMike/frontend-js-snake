class BaseElem {
	constructor(settings = {}) {
		this.x = settings.x || 0;
		this.y = settings.y || 0;
		this.isVisible = settings.isVisible || true
	}
}

baseElem = new BaseElem({ x: 1, y: 3, isVisible: false });

module.exports = BaseElem;
