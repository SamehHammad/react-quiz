import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import "../App.css";
import {
  comfirmReplay,
  questions,
  showCorrectAnsPub,
  theEnd,
} from "./Functions";

const Public = () => {
  const [finalreuslt, setfinalreuslt] = useState(false);
  const [currentquestion, setcurrentquestion] = useState(0);
  const [score, setscore] = useState(0);

  const finalopation = (isCorrect) => {
    if (isCorrect) {
      setscore(score + 1);
    }
    if (currentquestion + 1 < questions.length) {
      setcurrentquestion(currentquestion + 1);
    } else {
      setfinalreuslt(true);
    }
  };
  const again = () => {
    comfirmReplay();

    setfinalreuslt(false);
    setcurrentquestion(0);
    setscore(0);
  };
  const helpStyle = () => {
    showCorrectAnsPub(currentquestion);
  };
  const congrat = () => {
    theEnd();
  };
  return (
    <div className="App">
      <ProgressBar
        variant="success"
        now={((currentquestion + 1) * 100) / questions.length}
      />
      <div className="welc">
        <h1 className="header">اختبار الثقافه العامه</h1>
        <h1 className="correct-answers">عدد الاجابات الصحيحه:{score}</h1>
      </div>
      {finalreuslt ? (
        <div onLoad={congrat()} className="final-result">
          <h1>نتيجتك</h1>
          <h2 className="result">({(score / questions.length) * 100}%)</h2>
          <div>
            {score > 7 ? (
              <h1>رائع معلوماتك ممتازه</h1>
            ) : (
              <h1>معلوماتك ضعيفه إقرأ أكثر </h1>
            )}
          </div>
          <Button variant="success" onClick={again}>
            Again
          </Button>
        </div>
      ) : (
        <div className="Question-Card">
          <h2 className="title">
            السؤال {currentquestion + 1} من {questions.length}
          </h2>
          <Button variant="success" onClick={() => helpStyle()}>
            Help
          </Button>
          <h3 className="Question-text">{questions[currentquestion].text}</h3>

          {questions[currentquestion].options.map((quis) => (
            <ul key={quis.id}>
              <li
                className="answer-option"
                onClick={() => finalopation(quis.isCorrect)}
              >
                {quis.text}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Public;
