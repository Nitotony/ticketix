import  {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/login'

import Home from "./pages/homepage";
import RailSearchResult from "./pages/RailSearchResult"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/railsearchresult" element={<RailSearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
