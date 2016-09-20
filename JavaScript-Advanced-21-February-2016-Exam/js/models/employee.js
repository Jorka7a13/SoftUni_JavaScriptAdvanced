var app = app || {};

(function(scope) {
	function Employee(name, workHours) {
		this.setName(name);
		this.setWorkhours(workHours);
	}

	Employee.prototype.getName = function getName() {
		return this._name;
	}

	Employee.prototype.setName = function setName(name) {
		if (name.match(/^[a-zA-Z\s]*$/)) {
			this._name = name;
		} else {
			throw '"Name" must contain only letters and whitespaces!';
		}
	}

	Employee.prototype.getWorkhours = function getWorkhours() {
		return this._workHours;
	}

	Employee.prototype.setWorkhours = function setWorkhours(workHours) {
		if (!isNaN(parseFloat(workHours)) && isFinite(workHours)) {
			this._workHours = workHours;
		} else {
			throw '"WorkHours" must contain only digits!';
		}
	}

	scope._Employee = Employee;

	scope.employee = function employee(name, workHours) {
		return new Employee(name, workHours);
	}
})(app);