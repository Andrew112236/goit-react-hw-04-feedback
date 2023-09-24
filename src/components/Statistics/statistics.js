import React, { useState, useEffect } from 'react';
import styles from './Statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad } = props;
  const [positivePercentage, setPositivePercentage] = useState(0);
  const [negativePercentage, setNegativePercentage] = useState(0);

  useEffect(() => {
    const totalFeedback = good + neutral + bad;
    if (totalFeedback > 0) {
      const positivePercentageValue = (good / totalFeedback) * 100;
      const negativePercentageValue = (bad / totalFeedback) * 100;
      setPositivePercentage(positivePercentageValue);
      setNegativePercentage(negativePercentageValue);
    }
  }, [good, neutral, bad]);

  return (
    <div className={styles.statistics_container}>
      <p className={styles.title}>Statistics:</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p className={`${styles.statistics_item} ${styles.positive_feedback}`}>
        <span>Positive Feedback:</span>
        <span>{positivePercentage.toFixed(2)}%</span>
      </p>
      <p className={`${styles.statistics_item} ${styles.negative_feedback}`}>
        <span>Negative Feedback:</span>
        <span>{negativePercentage.toFixed(2)}%</span>
      </p>
    </div>
  );
}

export default Statistics;
