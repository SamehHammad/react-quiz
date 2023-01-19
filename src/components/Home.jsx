import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { sweetWwelcome } from "./Functions";

const Home = () => {
  const navigate =useNavigate();

  const welcome = () => {
    const welcBtn=document.querySelector(".welcomeBtn");
    sweetWwelcome();
    welcBtn.style.visibility="hidden";
  };
  const goToIslamicQuiz=() => {
navigate("/islamic");
  }
  const goToPublicQuiz=() => {
    navigate("/public");
      }
  return (
    <Container className="d-flex  justify-content-center align-items-center flex-column mt-3">
      <div className="welc">
      <h1>أهلا وسهلا بك معنا </h1>
      </div>
      

      <Button onClick={() => welcome()} className="p-2 mt-4 welcomeBtn">
        ممكن نتشرف بإسمك
      </Button>
      <Button 
        onClick={() => goToIslamicQuiz()}
        className="p-2 mt-4 btn btn-info"
      >
        إختبر معلوماتك الدينيه
      </Button>
      <Button
        onClick={() => goToPublicQuiz()}
        className="p-2 mt-4 btn btn-success"
      >
        إختبر معلوماتك العامه
      </Button>
    </Container>
  );
};

export default Home;
