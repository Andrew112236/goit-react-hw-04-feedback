import React, { Component } from 'react';
import styles from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.section_container}>
        <h2 className={styles.section_title}>{title}</h2>
        {children}
      </div>
    );
  }
}
export default Section;
