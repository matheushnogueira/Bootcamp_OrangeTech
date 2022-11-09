// Hooks
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Pages
import { Home } from './Pages/home'
import { Login } from './Pages/login'
import { Feed } from './Pages/feed'
import { Teste } from './Pages';

function App() {
return (
   <Router>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/feed" element={<Feed />}/>
         <Route path="/teste" element={<Teste />}/>
      </Routes>
   </Router>
  );
}

export default App;
