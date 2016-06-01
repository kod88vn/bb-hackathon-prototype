class Criterion {
  constructor(description) {
    this._description = description;
    this._weight = 1;
  }

  get weight() {
  	return this._weight;
  }

  set weight(weight) {
    this._weight = weight;
  }

  get description() {
  	return this._description;
  }
}

export default Criterion;
