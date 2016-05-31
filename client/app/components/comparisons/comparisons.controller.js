import Candidate from '../../common/domain/candidate.js';
import Criterion from '../../common/domain/criterion.js';

class ComparisonsController {
	constructor() {
		this.name = 'Comparisons';
		this.candidates = [
			new Candidate('Candidate A', 'A is an awesome candidate'),
			new Candidate('Candidate B', 'B is an ugly candidate')
		];
		this.criteria = [
			new Criterion('Budget', 9),
			new Criterion('Aesthetics', 5),
			new Criterion('Maintenance Cost', 7),
			new Criterion('Resell Value', 6),
			new Criterion('Customizability', 4)
		]
	}
}

export default ComparisonsController;
