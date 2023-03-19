import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import PostScreen from '../src/screen/Posts/index';
import CommentScreen from '../src/screen/Comments/index';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact  element={<PostScreen />} />
        <Route path='/comments' element={<CommentScreen />}/>
      </Routes>
    </Router>

  );
}

export default App;
