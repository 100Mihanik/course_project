import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Container fluid='xxl'>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfileContainer />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
