import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './redux.jsx';
import "./App.css";

const {store,persistor} = reduxStore();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App/>
      </Router>
    </PersistGate>
  </Provider>,
)
