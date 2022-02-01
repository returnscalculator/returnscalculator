import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Form,
  Alert,
  Collapse
} from "react-bootstrap";


const RD = (props) => {
  const [sipValue, setSipValue] = React.useState(10000);
  const [percentage, setPercentage] = React.useState(6);
  const [timePeriod, setTimePeriod] = React.useState(5);

const [words,setWords] = React.useState();
const [showWords, setShowWords] = React.useState(false);
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords () {
    var num=Math.floor(parseInt(sipValue) * ((Math.pow(percentage / 400 + 1, Math.floor((timePeriod*12) / 3)) - 1) / (1-(Math.pow(percentage / 400 + 1,(-1/3))))))
    if ((num = num.toString()).length > 9) return 'overflow';
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] !== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] !== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] !== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] !== 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'rupees ' : '';
    setWords(str);
    setShowWords(true);
  
}

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={{ span: 8 }} body>
          <Card body className="p-2">
            <Card.Title>{props.title} Calculator</Card.Title>

            <Form className="mt-5">
              <Row>
                <InputGroup className="mb-3 mt-5">
                  <Form.Label as={Col}> Monthly Investment</Form.Label>
                  <Form.Control
                    value={sipValue}
                    onChange={(e) => setSipValue(e.target.value)}
                    type="number"
                    placeholder="Ex : 20000"
                  />
                  <InputGroup.Text>₹</InputGroup.Text>
                  <Form.Range
                    min="500"
                    max="200000"
                    step="500"
                    value={sipValue}
                    className="mt-3"
                    onChange={(e) => setSipValue(e.target.value)}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup className="mb-3 mt-5">
                  <Form.Label as={Col}>Expected Return percentage</Form.Label>
                  <Form.Control
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    type="number"
                    placeholder="Ex : 12%"
                  />
                  <InputGroup.Text>%</InputGroup.Text>
                  <Form.Range
                    min="1"
                    max="15"
                    step="0.5"
                    value={percentage}
                    className="mt-3"
                    onChange={(e) => setPercentage(e.target.value)}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup className="mb-3 mt-5">
                  <Form.Label as={Col}>Total Time Period</Form.Label>
                  <Form.Control
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    type="number"
                    placeholder="Ex : 12%"
                  />
                  <InputGroup.Text>Yrs</InputGroup.Text>
                  <Form.Range
                    min="1"
                    max="40"
                    value={timePeriod}
                    className="mt-3"
                    onChange={(e) => setTimePeriod(e.target.value)}
                  />
                </InputGroup>
              </Row>

              <div className="mt-4">
                <Row>
                  <Col>
                    <Form.Label>Invested Amount :</Form.Label>
                  </Col>
                  <Col>
                    <Form.Label>
                      ₹
                      {Math.floor(sipValue * (timePeriod * 12)).toLocaleString(
                        "en-IN"
                      )}
                    </Form.Label>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Form.Label>Total Value on Maturity:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Label>
                      ₹
                      {Math.floor(parseInt(sipValue) *((Math.pow(percentage / 400 + 1,Math.floor((timePeriod * 12) / 3)) -1) /(1 - Math.pow(percentage / 400 + 1, -1 / 3)))).toLocaleString("en-IN")}
                    </Form.Label>
                    <Form.Label></Form.Label>
                  </Col>
                </Row>
              </div>
              <Collapse in={showWords}>
              <Alert className="mt-3" variant={showWords?"primary":""}>{words}</Alert>
              </Collapse>
              <div className="d-grid gap-2">
                <Button
                  className="mt-4"
                  variant="primary"
                  size="lg"
                  onClick={() => inWords()}
                >
                  Show In Words
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};



export default RD;
