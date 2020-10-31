import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ProductsPage from './components/products/ProductsPage';
import Clients from './components/Clients';
import Contact from './components/contact/ContactPage';

import { Provider } from 'react-redux';
import store from './store';

function App() {  
  return (
    
    <Router>
      <Provider store={store}>
        <Header />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products/">
                  <Redirect to="/products/All" /> 
              </Route>
              <Route exact path="/products/:category" component={ProductsPage} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
