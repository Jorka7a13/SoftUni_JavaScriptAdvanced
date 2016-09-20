var app = app || {};

(function(scope) {
	function Hall(name, capacity) {
		this.setName(name); 
		this.setCapacity(capacity);
		this.parties = [];
		this.lectures = [];
	}

	Hall.prototype.getName = function getName() {
		return this._name;
	}

	Hall.prototype.setName = function setName(name) {
		if (name.match(/^[a-zA-Z\s]*$/)) {
			this._name = name;
		} else {
			throw '"Name" must contain only letters and whitespaces!';
		}
	}

	Hall.prototype.getCapacity = function getCapacity() {
		return this._capacity;
	}

	Hall.prototype.setCapacity = function setCapacity(capacity) {
		if (!isNaN(parseFloat(capacity)) && isFinite(capacity)) {
			this._capacity = capacity;
		} else {
			throw '"Capacity" must contain only digits!';
		}
	}

	Hall.prototype.addEvent = function addEvent(event) {
		if (event instanceof app._Party) {
			this.parties.push(event);
		} else if (event instanceof app._Lecture) {
			this.lectures.push(event);
		} else {
			throw '"Event" must be an instance of Party or Lecture!';
		}
	}

	scope.hall = function hall(name, capacity) {
		return new Hall(name, capacity);
	}
})(app);