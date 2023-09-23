import React, { useState } from 'react';
import Statistics from './Statistics/statistics.js';
import FeedbackCounter from './FeedbackCounter/FeedbackCounter.js';
import Section from './Section/Section.js';
import Notification from './Notification/Notification.js';

function App() {
  // Initial state values
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // handleEvent buttons
  const handleButtonClick = category => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [category]: prevFeedback[category] + 1,
    }));
  };

  // Math values
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = (feedback.good / total) * 100 || 0;
  const negativePercentage = (feedback.bad / total) * 100 || 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackCounter
          feedback={feedback}
          handleButtonClick={handleButtonClick}
        />
      </Section>

      <Section>
        {total === 0 ? (
          <Notification message="There is no feedback.&#x1F622; " />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
            negativePercentage={negativePercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
