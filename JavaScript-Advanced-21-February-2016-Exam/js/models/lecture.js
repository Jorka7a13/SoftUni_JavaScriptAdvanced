var app = app || {};

(function(scope) {
	function Lecture(options) {
		scope._Event.call(this, options);
		this.setTrainer(options.trainer)
		this.setCourse(options.course); 
	}

	Lecture.extends(scope._Event);

	Lecture.prototype.getTrainer = function getTrainer() {
		return this._trainer;
	}

	Lecture.prototype.setTrainer = function setTrainer(trainer) {
		if (trainer instanceof scope._Trainer) {
			this._trainer = trainer;
		} else {
			throw '"Trainer" must be an instance of Trainer!';
		}
	}

	Lecture.prototype.getCourse = function getCourse() {
		return this._course;
	}

	Lecture.prototype.setCourse = function setCourse(course) {
		if (course instanceof scope._Course) {
			this._course = course;
		} else {
			throw '"Course" must be an instance of Course!';
		}
	}

	scope._Lecture = Lecture;

	scope.lecture = function lecture(options) {
		return new Lecture(options);					
	}												
})(app);