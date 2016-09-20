var app = app || {};

(function(scope) {
	function Event(options) {
		this.setTitle(options.title);
		this.setType(options.type);
		this.setDuration(options.duration)
		this.setDate(options.date);
	}

	Event.prototype.getTitle = function getTitle() {
		return this._title;
	}

	Event.prototype.setTitle = function setTitle(title) {
		if (title.match(/^[a-zA-Z\s]*$/)) {
			this._title = title;
		} else {
			throw '"Title" must contain only letters and whitespaces!';
		}
	}

	Event.prototype.getType = function getType() {
		return this._type;
	}

	Event.prototype.setType = function setType(type) {
		if (type.match(/^[a-zA-Z\s]*$/)) {
			this._type = type;
		} else {
			throw '"Type" must contain only letters and whitespaces!';
		}
	}

	Event.prototype.getDuration = function getDuration() {
		return this._duration;
	}

	Event.prototype.setDuration = function setDuration(duration) {
		if (!isNaN(parseFloat(duration)) && isFinite(duration)) {
			this._duration = duration;
		} else {
			throw '"Duration" must contain only digits!';
		}
	}

	Event.prototype.getDate = function getDate() {
		return this._date;
	}

	Event.prototype.setDate = function setDate(date) {
		if (date instanceof Date) {
			this._date = date;
		} else {
			throw '"Date" must be an instance of Date!';
		}
	}

	scope._Event = Event;
})(app);