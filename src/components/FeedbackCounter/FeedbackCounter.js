import React from 'react';
import styles from './FeedbackCounter.module.css';

function FeedbackCounter(props) {
  const { handleButtonClick } = props;

  return (
    <div className={styles.buttons_container}>
      {/* Remain the state */}
      <button
        className={styles.button}
        onClick={() => handleButtonClick('good')}
      >
        <p className={styles.emoji}>&#128512;</p>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick('neutral')}
      >
        <p className={styles.emoji}>&#x1F610;</p>
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick('bad')}
      >
        <p className={styles.emoji}>&#x1F624;</p>
      </button>
    </div>
  );
}

export default FeedbackCounter;
