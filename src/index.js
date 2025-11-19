import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cars from "./components/Cars";
import Marques from "./components/Marques";
import NewCar from "./components/NewCar";
import NotFound from "./components/NotFound";
import Car from "./components/Car";
import Marque from "./components/Marque";
import ErrorPage from "./components/ErrorPage";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/marques",
        element: <Marques />,
    },
    {
        path: "/marques/:name",
        element: <Marque />
    },
    {
        path: "/cars",
        element: <Cars />,
        children: [
            {
                path: "/cars/new",
                element: <NewCar />,
            },
            {
                path: "/cars/:name",
                element: <Car />
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
