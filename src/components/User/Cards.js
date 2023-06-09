import React from "react";
import styles from "./Cards.module.css";
import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";

const Cards = (props) => {
  return (
    <React.Fragment>
      <div>
        <i className={styles.solidCircle}></i>
        <i className={styles.circle}></i>
        <img src={cardFront} className={`${styles.front}`} alt="cardFront" />
        <h4 className={styles.cardNumber}>{props.cardNUM}</h4>
        <spam className={styles.cardName}>{props.cardName}</spam>
        <spam className={styles.cardMMYY}>
          {props.cardMM}/{props.cardYY}
        </spam>
      </div>
      <div>
        <img className={styles.back} src={cardBack} alt="cardBack" />
        <spam className={styles.cardCvc}>{props.cardCVC}</spam>
      </div>
    </React.Fragment>
  );
};

export default Cards;
