class Candidate {
  constructor(name, description) {
    this._name = name;
    this._description = description;
    this._score = 1;
  }

  get name() {
  	return this._name;
  }

  get description() {
  	return this._description;
  }

  get score() {
    return this._score;
  }

  set score(score) {
    this._score = score;
  }
}

export default Candidate;
