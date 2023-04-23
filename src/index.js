import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const ANAKIN_IMAGE = "https://i.quotev.com/oqq3tf76aaaa.jpg";
const RAY_IMAGE = "https://www.giantfreakinrobot.com/wp-content/uploads/2020/12/daisy-ridley-star-wars-rey.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App    author={{
              name: "Anakin skywalker",
              photo: ANAKIN_IMAGE,
              nickname: "@dart_vader"
            }}
              content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
              image={RAY_IMAGE}
              date={"26 февр."} />
  </React.StrictMode>
);


reportWebVitals();
