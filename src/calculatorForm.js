import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  InputGroup,
  Button,
  Alert,
  Form,
  Collapse
} from "react-bootstrap";


const Calculator = (props) => {
  const [sipValue, setSipValue] = React.useState(10000);
  const [percentage, setPercentage] = React.useState(12.5);
  const [timePeriod, setTimePeriod] = React.useState(10);
  const [isSip, setIsSip] = React.useState(props.title==="Mutual Funds"||props.title==="SIP"?true:false);

const [words,setWords] = React.useState();
const [showWords, setShowWords] = React.useState(false);
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords () {
    var num=isSip ? (Math.floor((sipValue *((((1 + ((percentage/100)/12))**(timePeriod * 12)) - 1))/((percentage/100)/12))*(1 + ((percentage/100)/12)))): 
    Math.floor(sipValue*((1+(percentage/100))**timePeriod))
    if ((num = num.toString()).length > 9) return 'overflow';
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'rupees ' : '';
    setWords(str);
    setShowWords(true);
  
}

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={{ span: 8 }} body>
          <Card body className="p-2">
          <Card.Title >{props.title} Returns Calculator</Card.Title>

            <Form className="mt-5">

              {
                props.title === "Mutual Funds" ?
                (<div>
                <Form.Check inline type="radio" checked={isSip} onChange={(e) => setIsSip(true)} label="SIP" name = "Investment-type" />
                <Form.Check inline type="radio" onChange={(e) => setIsSip(false)} label="Lumpsum" name = "Investment-type" />
                </div>) :
                ""

              }

              <Row>
                <InputGroup className="mb-3 mt-5">
                  <Form.Label as={Col}> {isSip?"Monthly Investment":"Investment Amount"}</Form.Label>
                  <Form.Control
                    value={sipValue}
                    onChange={(e) => setSipValue(e.target.value)}
                    type="number"
                    placeholder="Ex : 20000"
                  />
                  <InputGroup.Text>₹</InputGroup.Text>
                  <Form.Range
                    min="500"
                    max={isSip?200000:1000000}
                    step="500"
                    value={sipValue}
                    className="mt-3"
                    onChange={(e) => setSipValue(e.target.value)}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup className="mb-3 mt-5">
                  <Form.Label as={Col}>Expected Return percentage (p.a)</Form.Label>
                  <Form.Control
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    type="number"
                    placeholder="Ex : 12%"
                  />
                  <InputGroup.Text>%</InputGroup.Text>
                  <Form.Range
                    min="1"
                    max="30"
                    step="0.1"
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
                    ₹{isSip ? Math.floor(sipValue*(timePeriod*12)).toLocaleString('en-IN') : Math.floor(sipValue).toLocaleString('en-IN')}
                    </Form.Label>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Form.Label>Total Value :</Form.Label>
                  </Col>
                  <Col>
                    <Form.Label>
                    ₹{isSip ? (Math.floor((sipValue *((((1 + ((percentage/100)/12))**(timePeriod * 12)) - 1))/((percentage/100)/12))*(1 + ((percentage/100)/12)))).toLocaleString('en-IN'): 
                      Math.floor(sipValue*((1+(percentage/100))**timePeriod)).toLocaleString('en-IN')}
                    </Form.Label>
                    <Form.Label>
                      
                    </Form.Label>
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



export default Calculator;
