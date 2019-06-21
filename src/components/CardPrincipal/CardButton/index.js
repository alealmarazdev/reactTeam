import React from 'react';

import styles from './index.module.css';

const CardButton = ({ text }) => (
  <div className={styles.cardButton}>
    { text }
  </div>
)

export default CardButton;