import React from "react";
import styles from "./Success.module.css";
import success from "../images/icon-complete.svg";
import Button from "../UI/Button";

const Success = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.successButton}>
        <div className={styles.SuccessPosition}>
          <img className={styles.img1} src={success} alt="success" />
          <h1>THANK YOU!</h1>
          <h4 className={styles.added}>We've added your card details.</h4>
          <Button type="submit" className={styles.button}>
            Continue
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Success;
