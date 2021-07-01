import React, { Component } from 'react';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};
	handlerBTn = ({ target: { textContent } }) => {
		this.setState({
			[textContent]: this.state[textContent] + 1,
		});
	};

	countTotalFeedback = () => {
		const total = Object.values({ ...this.state }).reduce((acc, value) => {
			acc += value;
			return acc;
		}, 0);
		return total;
	};
	countPositiveFeedbackPercentage = () => {
		return Math.round((this.state.good * 100) / this.countTotalFeedback());
	};
	render() {
		const buttons = Object.keys({ ...this.state });
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={buttons} onLeaveFeedback={this.handlerBTn} />
				</Section>

				<Section title="Statistics">
					{this.countTotalFeedback() > 0 ? (
						<Statistics
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={this.countTotalFeedback()}
							positivePercentage={this.countPositiveFeedbackPercentage()}
						/>
					) : (
						<Notification message="No feedback given" />
					)}
				</Section>
			</>
		);
	}
}

export default App;
