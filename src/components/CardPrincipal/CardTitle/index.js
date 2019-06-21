import React from 'react';

import styles from './index.module.css';

const CardTitle = ({ title }) => {
    return(
  <div className={styles.CardTitle}>
    { title }
  </div>
)
}

export default CardTitle;