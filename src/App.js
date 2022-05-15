import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
