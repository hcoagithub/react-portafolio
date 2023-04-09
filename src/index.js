import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {ContextoProvider} from './context/Context'


import './css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContextoProvider>
    <App/> 
</ContextoProvider>


);


