import React, { useState } from 'react';
import styles from './Section.module.css';

function Section(props) {
  const [title] = useState(props.title);

  return (
    <div className={styles.section_container}>
      <h2 className={styles.section_title}>{title}</h2>
      {props.children}
    </div>
  );
}

export default Section;
