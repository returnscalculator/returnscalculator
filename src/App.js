import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calculator from './calculatorForm';
import Navigationbar from './Navbar';
import RD from './Rd';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Grid from "./buttons";
import Footer from './Footer';
import About from './About';
import Help from './Help';

function App() {
  return (
    <Router>
      <div>
        <Navigationbar />
        <Routes>
         <Route exact path="/" element={<Grid/>}/>
         <Route exact path="/home" element={<Grid/>}/>
          <Route exact path="/rd" element={<RD title="RD"/>}/>
          <Route exact path="/mf" element={<Calculator title="Mutual Funds" />}/>
          <Route exact path="/fd" element={<Calculator title="FD" />}/>
          <Route exact path="/stocks" element={<Calculator title="Stocks" />}/>
          <Route exact path="/sip" element={<Calculator title="SIP" />}/>
          <Route exact path="/lumpsum" element={<Calculator title="Lumpsum" />}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/help" element={<Help/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
