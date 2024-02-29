import logo from './logo.svg';
import './App.css';
import Marvellous from './Components/Marvellous';
import Infosystems from './Components/Infosystems';

function App() {
  return (
    <div className="App">
     <h1>Inside App Component (Root Component)</h1>
     <Marvellous></Marvellous>
     <Infosystems></Infosystems>
    </div>
  );
}

export default App;
