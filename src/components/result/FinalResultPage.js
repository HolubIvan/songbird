import React from "react";
import FinalButtonSubmit from "./FinalButtonSubmit";
import certificate from "./../../img/certificate.png";

const FinalResultPage = ({ score, gameEnded, onFinalButtonClick }) => {
  if (gameEnded) {
    if (score === "30") {
      return (
        <div className="result">
          <p className="result__head">Поздравляем!</p>
          <p className="result__description">
            Вы прошли викторину и набрали {score} из 30 возможных баллов!
          </p>
          <p className="result__certificate-description">
            Вы показали наилучший результат! Мы вручаем вам сертификат!
          </p>
          <img className="certificate" src={certificate} alt="certificate" />
          <FinalButtonSubmit onFinalButtonClick={onFinalButtonClick} />
        </div>
      );
    } else {
      return (
        <div className="result">
          <p className="result__head">Поздравляем!</p>
          <p className="result__description">
            Вы прошли викторину и набрали {score} из 30 возможных баллов!
          </p>
          <FinalButtonSubmit onFinalButtonClick={onFinalButtonClick} />
        </div>
      );
    }
  } else {
    return "";
  }
};

export default FinalResultPage;
