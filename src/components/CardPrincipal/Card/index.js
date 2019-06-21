import React, { Component } from 'react';

import CardImages from '../CardImages';
import CardBody from '../CardBody';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import CardButton from '../CardButton';

import styles from './index.module.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeOptions: [],
    };
  }

  render() {
    return (
      <div className={styles.card}>
        <CardImages />
        <CardBody>
          <CardTitle title="Alaska Malamute"/>
          <CardText text="Perejil"/>
          <CardButton text="Adopt" />
        </CardBody>
      </div>
    )
  }
}

export default Card;