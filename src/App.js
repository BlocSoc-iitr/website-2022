import './App.css';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import Resources from './Pages/Resources/Resources';
import Projects from './Pages/Projects/Projects';
import Events from './Pages/Events/Events';


function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Projects />} path="projects" />
          <Route element={<Events />} path="events" />
          <Route element={<Resources />} path="resources" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
