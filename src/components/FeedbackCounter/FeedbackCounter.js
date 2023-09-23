import React, { useState } from 'react';
import styles from './FeedbackCounter.module.css';

function FeedbackCounter(props) {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleButtonClick = type => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };
  return (
    <div className={styles.buttons_container}>
      <button
        className={styles.button}
        onClick={() => handleButtonClick('good')}
      >
        <p className={styles.emoji}>&#128512;</p>
        <p>Good: {feedbackCounts.good}</p>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick('neutral')}
      >
        <p className={styles.emoji}>&#x1F610;</p>
        <p>Neutral: {feedbackCounts.neutral}</p>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick('bad')}
      >
        <p className={styles.emoji}>&#x1F624;</p>
        <p>Bad: {feedbackCounts.bad}</p>
      </button>
    </div>
  );
}

export default FeedbackCounter;
