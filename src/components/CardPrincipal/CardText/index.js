import React from 'react';

import styles from './index.module.css';

const CardText = ({ text }) => 
{
  return  (
  <div className={styles.cardText}>
    { text }
  </div>
)
}
export default CardText;