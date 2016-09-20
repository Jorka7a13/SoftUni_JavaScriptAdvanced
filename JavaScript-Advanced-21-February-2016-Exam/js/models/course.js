var app = app || {};

(function(scope) {
	function Course(name, numberOfLectures) {
		this.setName(name); 
		this.setNumberOfLectures(numberOfLectures);
	}

	Course.prototype.test = function() {
		console.log('Passed!');
	}

	Course.prototype.getName = function getName() {
		return this._name;
	}

	Course.prototype.setName = function setName(name) {
		if (name.match(/^[a-zA-Z\s]*$/)) {
			this._name = name;
		} else {
			throw '"Name" must contain only letters and whitespaces!';
		}
	}

	Course.prototype.getNumberOfLectures = function getNumberOfLectures() {
		return this._numberOfLectures;
	}

	Course.prototype.setNumberOfLectures = function setNumberOfLectures(numberOfLectures) {
		if (!isNaN(parseFloat(numberOfLectures)) && isFinite(numberOfLectures)) {
			this._numberOfLectures = numberOfLectures;
		} else {
			throw '"NumberOfLectures" must contain only digits!';
		}
	}

	scope._Course = Course;

	scope.course = function course(name, numberOfLectures) {
		return new Course(name, numberOfLectures);
	}
})(app);
