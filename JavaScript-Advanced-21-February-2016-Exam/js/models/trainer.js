var app = app || {};

(function(scope) {
	function Trainer(name, workHours) {
		scope._Employee.call(this, name, workHours);
		this.courses = [];
		this.feedbacks = [];
	}

	Trainer.extends(scope._Employee);

	Trainer.prototype.addFeedback = function addFeedback(feedback) {
		if (typeof feedback === 'string' || feedback instanceof String) {
			this.feedbacks.push(feedback);
		} else {
			throw '"Feedback" must be a string!'; 
		}
	}

	Trainer.prototype.addCourse = function addCourse(course) {
		if (course instanceof scope._Course) {
			this.courses.push(course);
		} else {
			throw '"Course" must be an instance of Course!';
		}
	}

	scope._Trainer = Trainer;

	scope.trainer = function trainer(name, workHours) {
		return new Trainer(name, workHours);
	}
})(app);