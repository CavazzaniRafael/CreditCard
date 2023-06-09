import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Cards from "./Cards";
import Success from "./Success";

const Form = (props) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [numbers, setNumbers] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("THAINA CAVAZZANI");
  const [MM, setMM] = useState("07");
  const [YY, setYY] = useState("01");
  const [CVC, setCVC] = useState("123");
  const [cardNumberError, setCardNumberError] = useState(true);
  const [cardMMError, setCardMMError] = useState(true);
  const [cardYYError, setCardYYError] = useState(true);
  const [cardCvcError, setCardCvcError] = useState(true);
  const [cardNameError, setCardNameError] = useState(true);
  const [form, setform] = useState(true);
  const [success, setSuccess] = useState(false);

  const nameChangeHandler = (event) => {
    if (event.target.value.length !== 0) {
      setName(event.target.value.toUpperCase());
    } else {
      setName("THAINA CAVAZZANI");
    }
  };
  const numberChangeHandler = (event) => {
    setCardNumber(event.target.value);
    if (
      cardNumber.trim().length === 3 ||
      cardNumber.trim().length === 8 ||
      cardNumber.trim().length === 13
    ) {
      setCardNumber(event.target.value + " ");
    }
    if (event.target.value.length !== 0) {
      setNumbers(event.target.value);
    } else {
      setNumbers("0000 0000 0000 0000");
    }
  };
  const mmChangeHandler = (event) => {
    setCardMM(event.target.value);
    if (event.target.value.length !== 0) {
      setMM(event.target.value);
    } else {
      setMM("07");
    }
  };
  const yyChangeHandler = (event) => {
    setCardYY(event.target.value);
    if (event.target.value.length !== 0) {
      setYY(event.target.value);
    } else {
      setYY("01");
    }
  };
  const cvcChangeHandler = (event) => {
    setCardCvc(event.target.value);
    if (event.target.value.length !== 0) {
      setCVC(event.target.value);
    } else {
      setCVC("123");
    }
  };
  const successButton = () => {
    setform(true);
    setSuccess(false);
    setCardNumber("");
    setCardMM("");
    setCardYY("");
    setCardCvc("");
    setNumbers("0000 0000 0000 0000");
    setName("THAINA CAVAZZANI");
    setMM("07");
    setYY("01");
    setCVC("123");
  };

  const addUserCard = (event) => {
    event.preventDefault();
    if (name === "THAINA CAVAZZANI") {
      setCardNameError(false);
    } else {
      setCardNameError(true);
    }
    if (cardMM.trim().length < 2) {
      setCardMMError(false);
    } else {
      setCardMMError(true);
    }
    if (cardYY.trim().length < 2) {
      setCardYYError(false);
    } else {
      setCardYYError(true);
    }
    if (cardCvc.trim().length < 3) {
      setCardCvcError(false);
    } else {
      setCardCvcError(true);
    }
    if (cardNumber.trim().length < 16) {
      setCardNumberError(false);
      return;
    } else {
      setCardNumberError(true);
    }
    if (name && cardMM && cardYY && cardCvc && cardNumber) {
      setform(false);
      setSuccess(true);
    }
  };

  return (
    <Card className={styles.formPosition}>
      <Cards
        cardNUM={numbers}
        cardMM={MM}
        cardYY={YY}
        cardName={name}
        cardCVC={CVC}
      />
      {success && <Success successButton={successButton} />}
      {form && (
        <form onSubmit={addUserCard} className={styles.input}>
          <label htmlFor="CardHolder">CARDHOLDER NAME</label>
          <input
            className={`${
              !cardNameError ? styles.inputError : styles.inputRight
            }`}
            onChange={nameChangeHandler}
            id="CardHolder"
            type="text"
            placeholder="THAINA CAVAZZANI"
          ></input>
          <p className={`${!cardNameError ? styles.pError : styles.pRight}`}>
            Wrong format, please enter a name.
          </p>
          <label htmlFor="CardNumber">CARD NUMBER</label>
          <input
            className={`${
              !cardNumberError ? styles.inputError : styles.inputRight
            }`}
            maxLength="19"
            onChange={numberChangeHandler}
            value={cardNumber}
            id="CardNumber"
            type="text"
            placeholder="0000 0000 0000 0000"
          ></input>
          <p className={`${!cardNumberError ? styles.pError : styles.pRight}`}>
            Wrong format, be sure all numbers are filled
          </p>
          <label className={styles.float} htmlFor="ExpDate">
            EXP.DATE (MM/YY)
          </label>
          <label htmlFor="CVC">CVC</label>
          <input
            maxLength="2"
            className={`${styles.MMYY} ${
              !cardMMError ? styles.inputError : styles.inputRight
            }`}
            onChange={mmChangeHandler}
            value={cardMM}
            id="ExpDate"
            type="text"
            placeholder="MM"
          ></input>
          <input
            maxLength="2"
            className={`${styles.MMYY} ${styles.YY} ${
              !cardYYError ? styles.inputError : styles.inputRight
            }`}
            onChange={yyChangeHandler}
            value={cardYY}
            id="CardHolder"
            type="text"
            placeholder="YY"
          />
          <input
            maxLength="3"
            className={`${styles.cvc} ${
              !cardCvcError ? styles.inputError : styles.inputRight
            }`}
            placeholder="123"
            value={cardCvc}
            onChange={cvcChangeHandler}
            id="cardCvc"
            type="text"
          />
          <p
            className={` ${styles.cvcError} ${
              !cardCvcError ? styles.pError : styles.pRight
            }`}
          >
            Can't be blank
          </p>
          <p
            className={` ${
              !cardMMError || !cardYYError ? styles.pError : styles.pRight
            }`}
          >
            Can't be blank
          </p>
          <Button className={styles.button} type="submit">
            Confirm
          </Button>
        </form>
      )}
    </Card>
  );
};

export default Form;
