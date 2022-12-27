import React, { Component } from 'react';
import { Box } from './Box';

class App extends Component {
  state = {};
  render() {
    return <Box as="div" p={15}></Box>;
  }
}
export default App;
