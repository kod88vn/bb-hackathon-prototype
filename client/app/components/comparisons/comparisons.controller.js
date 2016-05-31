import Candidate from '../../common/domain/candidate.js';

class ComparisonsController {
  constructor() {
    this.name = 'Comparisons';
    this.candidates = [
    	new Candidate('Candidate A', 'A is an awesome candidate'),
    	new Candidate('Candidate B', 'B is an ugly candidate')
    ];
    this.criteria = [
    	{ description: 'Budget', weight: 9 },
    	{ description: 'Aesthetics', weight: 5 },
    	{ description: 'Maintenance Cost', weight: 7 },
    	{ description: 'Resell Value', weight: 6 },
    	{ description: 'Customizeability', weight: 4 }
    ]
  }
}

export default ComparisonsController;
