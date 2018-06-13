import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloWorld from './HelloWorld';
import ProsValidation from './PropsValidation'
import PropsValidation from './PropsValidation';
import Events from './Events';
import Translate from './Translate';


ReactDOM.render(
   // <HelloWorld txt= 'hy react via prop' />,
   //<PropsValidation  age="35" height="1.67"/>,
   //<Events></Events>,
   <Translate></Translate>,
    document.getElementById("root")
)

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
