import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {ThemeProvider} from "@mui/material/styles"
import Home from './component/Home/Home';
import {theme} from "./component/Theme/Globaltheme"
import Header from './component/Header/Header';


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Router>
        <Header/>
         <Routes>
           <Route path="" element={<Home/>} />
         </Routes>
       </Router>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
