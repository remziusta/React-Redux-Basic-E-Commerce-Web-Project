import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Container } from "reactstrap";
import CartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';
import Navi from '../navi/Navi';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import Dashboard from './Dashboard';

function App() {
  return (
    <div >
      <Container>
        <Navi/>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Dashboard}/>
          <Route path="/saveproduct/:productId"  component={AddOrUpdateProduct}/>
          <Route path="/saveproduct"  component={AddOrUpdateProduct}/>
          <Route path="/cart" exact component={CartDetail}/>
          <Route exact component={NotFound}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
