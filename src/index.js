import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cars from "./components/Cars";
import Marques from "./components/Marques";
import NewCar from "./components/NewCar";
import NotFound from "./components/NotFound";
import Car from "./components/Car";
import Marque from "./components/Marque";


const MyApp = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="marques" element={<Marques />} />
            <Route path="marques/:name" element={<Marque />} />
            <Route path="cars/:name" element={<Car />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/new" element={<NewCar />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
