import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbarr from "./components/navbar/Navbarr";
import Islamic from "./components/Islamic";
import Answers from "./components/Islamic-answers";
import Public from "./components/Public";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbarr />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/islamic" element={<Islamic />} />
          <Route path="/islamic-answers" element={<Answers />} />
          <Route path="/public" element={<Public />} />
        </Routes>
      </Container>
      <Footer/>

    </>
  );
}

export default App;
