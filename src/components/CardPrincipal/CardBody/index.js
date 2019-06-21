import React from 'react'

import styles from './index.module.css';

const CardBody = ({ children }) => (
  <div className={styles.cardBody}>
    { children }
  </div>
)

export default CardBody;