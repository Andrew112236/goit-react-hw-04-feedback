import React, { useState, useEffect } from 'react';
import styles from './FeedbackCounter.module.css';

function FeedbackCounter(props) {
  const { handleButtonClick } = props;

  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {}, [feedbackState]);

  const handleButtonWithUpdate = category => {
    setFeedbackState(prevFeedbackState => ({
      ...prevFeedbackState,
      [category]: prevFeedbackState[category] + 1,
    }));
    handleButtonClick(category);
  };

  return (
    <div className={styles.buttons_container}>
      <button
        className={styles.button}
        onClick={() => handleButtonWithUpdate('good')}
      >
        <p className={styles.emoji}>Good</p>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonWithUpdate('neutral')}
      >
        <p className={styles.emoji}>Neutral</p>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonWithUpdate('bad')}
      >
        <p className={styles.emoji}>Bad</p>
      </button>
    </div>
  );
}

export default FeedbackCounter;
