import Candidate from '../../common/domain/candidate.js';
import Criterion from '../../common/domain/criterion.js';

class ComparisonsController {
	constructor() {
		var ctrl = this;
		this.name = 'Comparisons';
		this.calculateCriteriaWeights = this.calculateCriteriaWeights;

		this.candidates = this.generateCandidates();
		this.criteria = this.generateCriteria();
		this.opinionOptions = this.generateOpinionOptions();
		this.criteriaSurveys = this.composeSurveys(this.criteria);
		this.candidateSurveys = this.composeCandidateSurveys(this.candidates);
		this.calculateCriteriaWeights();
	}

	calculateScores() {
		this.candidates.forEach(c => {

		});
	}

	calculateCriteriaWeights() {
		let criteriaWeightMap = {};
		this.criteria.forEach(c => criteriaWeightMap[c.description] = c);
		this.criteriaSurveys.forEach(o => {
			let index = o.opinion.opinionIndex - 5;
			if(index > 0) {
				criteriaWeightMap[o.left.description].weight += index;
			} else {
				criteriaWeightMap[o.right.description].weight += - index;
			}
		});
	}

	generateOpinionOptions() {
		return [
			{description: '1 - Strongly Disagree', opinionIndex: 1},
			{description: '2 - Much Disagree', opinionIndex: 2},
			{description: '3 - Disagree', opinionIndex: 3},
			{description: '4 - Slightly Disagree', opinionIndex: 4},
			{description: '5 - Neutral', opinionIndex: 5},
			{description: '6 - Slightly Agree', opinionIndex: 6},
			{description: '7 - Agree', opinionIndex: 7},
			{description: '8 - Much Agree', opinionIndex: 8},
			{description: '9 - Strongly Agree', opinionIndex: 9},
		];
	}

	composeSurveys(options) {
		let surveys = [];

		for(let i = 0; i < options.length - 1; i++) {
			for(let j = i +1; j < options.length; j++) {
				surveys.push({left: options[i], right: options[j], opinion: this.opinionOptions[4]});
			}
		}

		return surveys;
	}

	composeCandidateSurveys(options) {
		let surveys = [];
		let criteria = this.criteria;

		criteria.forEach(c => {
			for(let i = 0; i < options.length - 1; i++) {
				for(let j = i +1; j < options.length; j++) {
					surveys.push({
						left: options[i], 
						right: options[j],
						criterion: c,
						opinion: this.opinionOptions[4]});
				}
			}
		});
		

		return surveys;
	}

	generateCandidates() {
		return [
			new Candidate('Candidate A', 'A is an awesome candidate'),
			new Candidate('Candidate B', 'B is an ugly candidate'),
			new Candidate('Candidate C', 'C is an dumb candidate'),
		];
	}

	generateCriteria() {
		return [
			new Criterion('Budget', 1),
			new Criterion('Aesthetics', 1),
			new Criterion('Maintenance Cost', 1),
			new Criterion('Resell Value', 1),
			new Criterion('Customizability', 1)
		];
	}
}

export default ComparisonsController;
