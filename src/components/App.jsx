import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  setRating = evt => {
    const { name } = evt.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, feedback) => acc + feedback,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((100 / this.countTotalFeedback()) * this.state.Good) || 0;
  };

  render() {
    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'start',
          marginTop: '150px',
          alignItems: 'start',
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.setRating}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            feedbakcs={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
