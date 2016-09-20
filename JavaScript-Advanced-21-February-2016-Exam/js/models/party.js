var app = app || {};

(function(scope) {
	function Party(options) {
		scope._Event.call(this, options);
		this.setIsCatered(options.isCatered);
		this.setIsBirthday(options.isBirthday);
		this.setOrganiser(options.organiser);
	}

	Party.extends(scope._Event);

	Party.prototype.checkIsCatered = function checkIsCatered() {
		return this._isCatered;
	}

	Party.prototype.setIsCatered = function setIsCatered(isCatered) {
		if (isCatered) {
			this._isCatered = true;
		} else {
			this._isCatered = false;
		}
	}

	Party.prototype.checkIsBirthday = function checkIsBirthday() {
		return this._isCatered;
	}

	Party.prototype.setIsBirthday = function setIsBirthday(isBirthday) {
		if (isBirthday) {
			this._isBirthday = true;
		} else {
			this._isBirthday = false;
		}
	}

	Party.prototype.getOrganiser = function getOrganiser() {
		return this.organiser;
	}

	Party.prototype.setOrganiser = function setOrganiser(organiser) {
		if (organiser instanceof scope._Employee) {
			this.organiser = organiser;
		} else {
			throw '"Organiser" must be an instance of Employee!'; 
		}
	}

	scope._Party = Party;

	scope.party = function party(options) {
		return new Party(options);
	}
})(app);