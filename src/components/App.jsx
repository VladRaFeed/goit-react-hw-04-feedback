import { useState } from 'react';
import css from './app.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedBackPoint = type => {
    switch (type) {
      case 'good':
        return setGood(prevStateGood => prevStateGood + 1);
      case 'neutral':
        return setNeutral(prevStateNeutral => prevStateNeutral + 1);
      case 'bad':
        return setBad(prevStateBad => prevStateBad + 1);
      default:
        return;
    }
  };

  const total = good + neutral + bad;

  return (
    <div className={css.global_wrapper}>
      <Section title="FeedBack">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedBack={addFeedBackPoint}
        />
      </Section>
      <Section title="Stats">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={Math.round((good / total) * 100)}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
