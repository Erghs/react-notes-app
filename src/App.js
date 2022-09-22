
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
        
      <Routes>
      <Route path="/registration" element={ <Register />}>
      </Route>
      <Route path="/" element={ <Login/> }>
      </Route>
      
       </Routes>

    </div>
  );
}

export default App;