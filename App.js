import './App.css';
import * as React from 'react';
import Home from './Home';
import {BrowserRouter} from "react-router-dom"
import Footer from './Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function App() {
  return (
   <div>
   <BrowserRouter>
   <Home />
   <Footer/>
   </BrowserRouter>
   </div>
   
   
  );
}

export default App;