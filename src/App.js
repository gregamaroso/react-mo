import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import ProductFull from './components/cards/ProductFull';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ProductFull />
      </React.Fragment>
    );
  }
}

export default App;
