import './styles/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container">
        </div>
      </div>
    </Router>
  );
}

export default App;
