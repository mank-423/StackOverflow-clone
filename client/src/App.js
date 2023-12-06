import './App.css';
import RoutesCollect from './RoutesCollect';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RoutesCollect />
      </Router>

    </div>
  );
}

export default App;
