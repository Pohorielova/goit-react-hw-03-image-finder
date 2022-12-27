import React, { Component } from 'react';
import { Box } from './Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {};
  render() {
    return (
      <Box as="div" p={0}>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <Button></Button>
      </Box>
    );
  }
}
export default App;
