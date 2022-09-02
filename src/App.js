import MTable from './components/MTable'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import EmpDet from './components/empDet';
import Tree from './components/Tree';
import './App.css'
function App() {
  return (
    // <NoteState>
    <Router>
    <Routes>
        <Route exact path="/" element={<MTable />}/>
        <Route exact path="/emp/:name" element={<EmpDet />} />
        <Route exact path="/tree" element={<Tree />} />
      </Routes>

  </Router>

  );
}

export default App;
