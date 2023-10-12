import Authenticate from "./components/Authenticate";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md="auto" className="justify-content-center">
            <Authenticate />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
